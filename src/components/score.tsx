import styled from 'styled-components';

interface Props {
  score: number;
}

export default function Controls(props: Props) {
  return <div>Current Score: {props.score}</div>;
}
