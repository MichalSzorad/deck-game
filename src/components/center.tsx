import styled from 'styled-components';

const Center = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: ${(props) => props.height ?? 'auto'};
`;

export default Center;
