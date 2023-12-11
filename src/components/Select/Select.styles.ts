import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
`;
