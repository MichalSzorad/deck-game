import { useEffect } from 'react';
import { Center, Controls, GameArea, Header, LargeFailMessage, LargeSuccessMessage, Page, Score } from '../components';
import styled from 'styled-components';
import useDeckGame from '../deck-game-hook';

export default function GamePage() {
  const game = useDeckGame();

  useEffect(() => {
    game.createGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDrawClick() {
    game.drawCard();
  }

  function handleRestartClick() {
    game.resetGame();
  }

  if (game.loadingGame) {
    return (
      <Page>
        <Center height="100vh">Loading...</Center>
      </Page>
    );
  }

  if (game.error) {
    return (
      <Page>
        <Center height="100vh">There has been an error, please reload and try again later.</Center>
      </Page>
    );
  }

  return (
    <Page>
      <Header highScore={game.highScore} />
      <MainContent>
        <GameArea cards={game.cards} />
      </MainContent>
      <Center>
        <Score score={game.cardsOnDeskScore} />
      </Center>
      <Center>
        {game.isBust && <LargeFailMessage>You are bust!</LargeFailMessage>}
        {game.hasWon && <LargeSuccessMessage>You won!</LargeSuccessMessage>}
      </Center>
      <Controls
        disabled={game.drawingCard}
        allowDraw={!game.isBust && !game.hasWon}
        onRestartClick={handleRestartClick}
        onDrawClick={handleDrawClick}
      />
    </Page>
  );
}

const MainContent = styled.div`
  margin: ${(props) => props.theme.spacing.medium};
`;
