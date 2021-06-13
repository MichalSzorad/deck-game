import { useMutation } from 'react-query';
import { createNewDeck, drawOneCard } from '../deck-api';
import { useEffect, useState } from 'react';
import { Card } from '../types';
import { Controls, GameArea, Header, LargeFailMessage, LargeSuccessMessage, Score } from '../components';
import { isNumeric } from '../utils';
import styled from 'styled-components';

function useDeckGame() {
  const createDeckMutation = useMutation(() => createNewDeck());
  const drawCardMutation = useMutation((deckId: string) => drawOneCard(deckId));
  const [highScore, setHighScore] = useState(0);
  const [currentCards, setCurrentCards] = useState<Card[]>([]);

  function createGame() {
    createDeckMutation.mutate();
  }

  function drawCard() {
    if (createDeckMutation.data?.deckId) {
      drawCardMutation.mutate(createDeckMutation.data.deckId, {
        onSuccess: (card) => {
          setCurrentCards([...currentCards, card]);
        },
      });
    }
  }

  function resetGame() {
    setCurrentCards([]);
    createGame();
  }

  return {
    createGame,
    drawCard,
    resetGame,
    cards: currentCards,
    drawingCard: drawCardMutation.isLoading,
    loadingGame: createDeckMutation.isLoading,
    highScore,
    setHighScore,
  };
}

export default function GamePage() {
  const game = useDeckGame();

  useEffect(() => {
    game.createGame();
  }, []);

  function handleDrawClick() {
    game.drawCard();
  }

  function handleRestartClick() {
    game.resetGame();
  }

  const numberOfCards = game.cards.length;
  const cardsOnDeskScore = game.cards.reduce(
    (acc, current) =>
      acc + (isNumeric(current.value) ? parseFloat(current.value) : current.value.toUpperCase() === 'ACE' ? 11 : 10),
    0
  );

  const hasWon = cardsOnDeskScore === 21;
  const isBust = cardsOnDeskScore > 21;

  useEffect(() => {
    if (!isBust && numberOfCards > game.highScore) {
      game.setHighScore(numberOfCards);
    }
  }, [cardsOnDeskScore, isBust, game.highScore, numberOfCards]);

  if (game.loadingGame) {
    return <div>Loading</div>;
  }

  return (
    <Page>
      <Header highScore={game.highScore} />
      <GameArea cards={game.cards} />
      <Score score={cardsOnDeskScore} />
      {isBust && <LargeFailMessage>You are bust!</LargeFailMessage>}
      {hasWon && <LargeSuccessMessage>You won!</LargeSuccessMessage>}
      <Controls allowDraw={!isBust && !hasWon} onRestartClick={handleRestartClick} onDrawClick={handleDrawClick} />
    </Page>
  );
}

const Page = styled.div``;
