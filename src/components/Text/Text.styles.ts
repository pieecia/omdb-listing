import styled from "styled-components";

export const StyledText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
`;
