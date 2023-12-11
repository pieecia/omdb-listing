import styled from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  gap: 0.5rem;
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-wrap: nowrap;
  }
`;
