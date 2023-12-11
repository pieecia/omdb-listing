import styled from "styled-components";
import { Link } from "react-router-dom";

interface IStyledMoviesListProps {
  isFetching: boolean;
}

export const StyledMoviesList = styled.div<IStyledMoviesListProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;

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
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledMoviesListTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  text-decoration: none;
  color: #000;
`;

export const StyledMoviesListTitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const StyledMoviesListImage = styled.img`
  height: 100%;
  max-width: 100%;
  max-height: 250px;
  margin: 0 auto;
  object-fit: cover;
`;
