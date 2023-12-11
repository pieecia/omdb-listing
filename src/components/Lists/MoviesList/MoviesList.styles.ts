import styled from "styled-components";
import { Link } from "react-router-dom";

interface IStyledMoviesListProps {
  isFetching: boolean;
}

export const StyledMoviesList = styled.div<IStyledMoviesListProps>`
  display: grid;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  ${({ isFetching }) =>
    isFetching &&
    `
        opacity: 0.5;
        pointer-events: none;
    `}
`;

export const StyledMoviesListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledMoviesListTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledMoviesListTitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledMoviesListImage = styled.img`
  height: 100%;
  max-width: 100%;
  max-height: 250px;
  margin: 0 auto;
  object-fit: cover;
`;
