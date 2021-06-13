import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import { memo } from 'react';

interface Props {
  highScore: number;
}

export default memo(Header);

function Header(props: Props) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Line>High Score: {props.highScore}</Line>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 77px;
  width: 100%;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
`;
