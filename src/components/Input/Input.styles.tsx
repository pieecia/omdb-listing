import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
`;
