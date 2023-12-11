import {
  setSearchMoviesPage,
  setSearchMoviesTitle,
  setSearchMoviesType,
  setSearchMoviesYear,
} from "@/services/reducers/searchMoviesSlice.ts";
import { IMovieType } from "@/interfaces/movie.interface.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { StyledSearchForm } from "@/components/Forms/SearchForm/SearchForm.styles.ts";
import { StyledInput } from "@/components/Input/Input.styles.tsx";
import { StyledSelect } from "@/components/Select/Select.styles.ts";
import { ChangeEvent } from "react";

const SearchForm = () => {
  const dispatch = useAppDispatch();

  const { title, year, type } = useAppSelector((state) => state.searchMovies);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchMoviesTitle(e.target.value));
    dispatch(setSearchMoviesPage(1));
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchMoviesYear(Number(e.target.value)));
    dispatch(setSearchMoviesPage(1));
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchMoviesType(e.target.value as IMovieType));
    dispatch(setSearchMoviesPage(1));
  };

  return (
    <StyledSearchForm>
      <StyledInput
        type={"text"}
        placeholder={"Movie Name"}
        value={title}
        onChange={handleTitleChange}
      />
      <StyledInput
        type={"number"}
        defaultValue={year}
        placeholder={"Year"}
        step={1}
        onChange={handleYearChange}
      />
      <StyledSelect value={type} onChange={handleTypeChange}>
        <option value={""}>All</option>
        <option value={"movie"}>Movie</option>
        <option value={"series"}>Series</option>
        <option value={"episode"}>Episode</option>
      </StyledSelect>
    </StyledSearchForm>
  );
};

export default SearchForm;
