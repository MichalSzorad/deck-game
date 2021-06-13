import { useMutation } from 'react-query';
import { createNewDeck, drawOneCard } from './deck-api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card } from './types';
import { isNumeric } from './utils';

export default function useDeckGame() {
  const createDeckMutation = useMutation(() => createNewDeck());
  const drawCardMutation = useMutation((deckId: string) => drawOneCard(deckId));
  const [highScore, setHighScore] = useState(0);
  const [currentCards, setCurrentCards] = useState<Card[]>([]);

  const createGame = useCallback(() => createDeckMutation.mutate(), [createDeckMutation]);
  const resetGame = useCallback(() => {
    setCurrentCards([]);
    createGame();
  }, [createGame, setCurrentCards]);

  const drawCard = useCallback(() => {
    if (createDeckMutation.data?.deckId) {
      drawCardMutation.mutate(createDeckMutation.data.deckId, {
        onSuccess: (card) => {
          setCurrentCards((cards) => [...cards, card]);
        },
      });
    }
  }, [createDeckMutation, drawCardMutation, setCurrentCards]);

  const error = createDeckMutation.error || drawCardMutation.error;

  const numberOfCards = currentCards.length;
  const cardsOnDeskScore = useMemo(
    () =>
      currentCards.reduce(
        (acc, current) =>
          acc +
          (isNumeric(current.value) ? parseFloat(current.value) : current.value.toUpperCase() === 'ACE' ? 11 : 10),
        0
      ),
    [currentCards]
  );

  const hasWon = cardsOnDeskScore === 21;
  const isBust = cardsOnDeskScore > 21;

  useEffect(() => {
    if (!isBust && numberOfCards > highScore) {
      setHighScore(numberOfCards);
    }
  }, [cardsOnDeskScore, isBust, highScore, numberOfCards]);

  return {
    createGame,
    drawCard,
    resetGame,
    cards: currentCards,
    drawingCard: drawCardMutation.isLoading,
    loadingGame: createDeckMutation.isLoading,
    highScore,
    setHighScore,
    error,
    numberOfCards,
    cardsOnDeskScore,
    hasWon,
    isBust,
  };
}
