import styled from 'styled-components';

interface Props {
  highScore: number;
}

export default function Header(props: Props) {
  return <Container>High Score: {props.highScore}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77px;
`;
