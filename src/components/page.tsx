import styled from 'styled-components';

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  min-height: 100vh;
  color: ${(props) => props.theme.colors.dark};
`;

export default Page;
