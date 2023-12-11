import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const StyledPaginationButton = styled.button`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
