import { useSearchMoviesQuery } from "@/services/api.ts";
import Pagination from "@/components/Pagination/Pagination.tsx";
import SearchForm from "@/components/Forms/SearchForm/SearchForm.tsx";
import MoviesList from "@/components/Lists/MoviesList/MoviesList.tsx";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { StyledContainer } from "@/components/Container/Container.styles.ts";

const Home = () => {
  const { title, page, year, type } = useAppSelector(
    (state) => state.searchMovies
  );

  const { data, isLoading, isError, isFetching } = useSearchMoviesQuery(
    {
      title,
      page,
      year,
      type,
    },
    {
      skip: !title,
    }
  );

  const isDisabledPreviousPage = page === 1;
  const isDisabledNextPage = data?.Search?.length !== 10;

  if (isLoading) return <StyledContainer>Loading...</StyledContainer>;

  if (isError)
    return <StyledContainer>{"Something went wrong"}</StyledContainer>;

  return (
    <StyledContainer>
      <SearchForm />
      {data?.Error ? (
        <div>{data.Error}</div>
      ) : (
        <>
          <MoviesList movies={data?.Search} isFetching={isFetching} />
          <Pagination
            isDisabledPreviousPage={isDisabledPreviousPage}
            isDisabledNextPage={isDisabledNextPage}
          />
        </>
      )}
    </StyledContainer>
  );
};

export default Home;
