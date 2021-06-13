import { Card } from '../types';

interface Props {
  cards: Card[];
}

export default function GameArea(props: Props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
