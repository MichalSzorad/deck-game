import styled from 'styled-components';

export const LargeSuccessMessage = styled.h1`
  color: ${(props) => props.theme.colors.green};
`;

export const LargeFailMessage = styled.h1`
  color: ${(props) => props.theme.colors.orange};
`;
