import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: ${({ theme }) => `${theme.containerWidth}px`};
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
`;
