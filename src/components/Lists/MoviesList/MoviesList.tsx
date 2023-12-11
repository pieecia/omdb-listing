import { ISearchMovies } from "@/interfaces/searchMovies.interface.ts";
import {
  StyledMoviesList,
  StyledMoviesListImage,
  StyledMoviesListItem,
  StyledMoviesListTitle,
  StyledMoviesListTitleLink,
} from "@/components/Lists/MoviesList/MoviesList.styles.ts";

interface IMoviesListProps {
  movies: ISearchMovies["Search"];
  isFetching: boolean;
}

const isPoster = (poster: string) => poster !== "N/A";

const convertTitleToSlug = (title: string) =>
  title.toLowerCase().replace(/ /g, "-");

const MoviesList = ({ movies, isFetching }: IMoviesListProps) => {
  return (
    <StyledMoviesList isFetching={isFetching}>
      {movies?.map((movie) => (
        <StyledMoviesListItem key={movie.imdbID}>
          {isPoster(movie.Poster) && (
            <StyledMoviesListTitleLink
              to={`/movies/${convertTitleToSlug(movie.Title)}`}
            >
              <StyledMoviesListImage
                src={movie.Poster}
                width={200}
                height={443}
                alt={movie.Title}
              />
            </StyledMoviesListTitleLink>
          )}
          <StyledMoviesListTitleLink
            to={`/movies/${convertTitleToSlug(movie.Title)}`}
          >
            <StyledMoviesListTitle>{movie.Title}</StyledMoviesListTitle>
          </StyledMoviesListTitleLink>
        </StyledMoviesListItem>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
