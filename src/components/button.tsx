import styled from 'styled-components';

type Variant = 'primary' | 'secondary';

export const Button = styled.button<{ variant?: Variant }>`
  color: ${(props) => props.theme.colors.light};
  outline: none;
  padding: ${(props) => props.theme.spacing.tiny} ${(props) => props.theme.spacing.small};
  cursor: pointer;
  transition: 0.125s all;
  text-transform: uppercase;
  border-radius: 3px;
  border: 0;
  background: ${(props) => (props.variant === 'secondary' ? props.theme.colors.blue : props.theme.colors.dark)};
  font-weight: bold;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);

  :hover:not(:disabled),
  :active:not(:disabled),
  :focus:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  :disabled {
    cursor: default;
    opacity: 0.4;
  }
`;
