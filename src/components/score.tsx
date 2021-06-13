import { memo } from 'react';

interface Props {
  score: number;
}

export default memo(Score);

function Score(props: Props) {
  return <div>Current Score: {props.score}</div>;
}
