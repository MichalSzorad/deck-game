import styled from 'styled-components';

export const LargeSuccessMessage = styled.h1`
  color: ${(props) => props.theme.colors.green};
  margin: ${(props) => props.theme.spacing.medium};
`;

export const LargeFailMessage = styled.h1`
  color: ${(props) => props.theme.colors.orange};
  margin: ${(props) => props.theme.spacing.medium};
`;
