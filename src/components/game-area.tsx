import { Card } from '../types';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import { memo } from 'react';

interface Props {
  cards: Card[];
}

export default memo(GameArea);

function GameArea(props: Props) {
  if (props.cards.length === 0) {
    return (
      <Container>
        <Row>
          <Desk>
            <EmptyDeckMessage>Your deck is empty...</EmptyDeckMessage>
          </Desk>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Desk>
          {props.cards.map((card, index) => (
            <CardContainer key={index} image={card.image} />
          ))}
        </Desk>
      </Row>
    </Container>
  );
}

const EmptyDeckMessage = styled.span`
  font-size: ${(props) => props.theme.spacing.medium};
  text-align: center;
  width: 100%;
`;

const Desk = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.theme.spacing.small};
  background: #fff;
  border-radius: 2px;
  min-height: 400px;
  width: 100%;
  flex-wrap: wrap;
`;

const CardContainer = styled.div<{ image: string }>`
  background: ${(props) => props.theme.colors.light};
  height: 400px;
  background: url('${(props) => props.image}') no-repeat center center;
  width: 300px;
`;
