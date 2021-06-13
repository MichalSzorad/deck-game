export type Suit = 'SPADES' | 'DIAMONDS' | 'CLUBS' | 'HEARTS';

export interface Card {
  image: string;
  code: string;
  value: string;
  suit: Suit;
}
