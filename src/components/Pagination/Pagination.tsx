import { setSearchMoviesPage } from "@/services/reducers/searchMoviesSlice.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import {
  StyledPagination,
  StyledPaginationButton,
} from "./Pagination.styles.ts";
import { useEffect } from "react";

interface IPaginationProps {
  isDisabledPreviousPage: boolean;
  isDisabledNextPage: boolean;
}

const Pagination = ({
  isDisabledPreviousPage,
  isDisabledNextPage,
}: IPaginationProps) => {
  const dispatch = useAppDispatch();

  const { page } = useAppSelector((state) => state.searchMovies);

  const handlePreviousPage = () => {
    dispatch(setSearchMoviesPage(page - 1));
  };

  const handleNextPage = () => {
    dispatch(setSearchMoviesPage(page + 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <StyledPagination>
      <StyledPaginationButton
        onClick={handlePreviousPage}
        disabled={isDisabledPreviousPage}
      >
        Previous Page
      </StyledPaginationButton>
      <StyledPaginationButton
        onClick={handleNextPage}
        disabled={isDisabledNextPage}
      >
        Next Page
      </StyledPaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
