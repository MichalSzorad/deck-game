import styled from 'styled-components';

interface Props {
  onDrawClick?(): void;
  onRestartClick?(): void;
  allowDraw: boolean;
}

export default function Controls(props: Props) {
  return (
    <div>
      <Button disabled={!props.allowDraw} onClick={props.onDrawClick}>
        Draw Card
      </Button>
      <Button onClick={props.onRestartClick}>Start Again</Button>
    </div>
  );
}

const Button = styled.button``;
