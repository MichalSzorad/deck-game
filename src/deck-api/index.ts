import { Card } from '../types';

export async function createNewDeck(): Promise<{ deckId: string }> {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const { success, deck_id } = await response.json();
  if (!success || !deck_id) {
    throw new Error('Could not create a new deck');
  }
  return { deckId: deck_id };
}

export async function drawOneCard(deckId: string): Promise<Card> {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const { success, cards } = await response.json();
  if (!success || !cards || cards.length !== 1) {
    throw new Error('Could not draw a card');
  }

  const { image, value, suit, code } = cards[0];
  return { image, value, suit, code };
}
