import styled from 'styled-components';
import { Button } from './button';
import { Center } from './center';

interface Props {
  onDrawClick?(): void;
  onRestartClick?(): void;
  allowDraw: boolean;
  disabled?: boolean;
}

export default function Controls(props: Props) {
  return (
    <Center>
      <ControlArea>
        <Button
          tabIndex={1}
          variant="primary"
          disabled={!props.allowDraw || props.disabled}
          onClick={props.onDrawClick}
        >
          Draw Card
        </Button>
      </ControlArea>
      <ControlArea>
        <Button tabIndex={2} variant="secondary" disabled={props.disabled} onClick={props.onRestartClick}>
          Start Again
        </Button>
      </ControlArea>
    </Center>
  );
}

const ControlArea = styled.div`
  margin: ${(props) => props.theme.spacing.small};
`;
