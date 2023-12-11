import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieType } from "@/interfaces/movie.interface.ts";

export interface ISearchMoviesState {
  title: string;
  page: number;
  year?: number;
  type?: IMovieType;
}

const initialState = {
  title: "Shrek",
  page: 1,
  year: undefined,
  type: undefined,
} as ISearchMoviesState;

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: initialState,
  reducers: {
    setSearchMoviesTitle: (
      state,
      action: PayloadAction<ISearchMoviesState["title"]>
    ) => {
      state.title = action.payload;
    },
    setSearchMoviesPage: (
      state,
      action: PayloadAction<ISearchMoviesState["page"]>
    ) => {
      state.page = action.payload;
    },
    setSearchMoviesYear: (
      state,
      action: PayloadAction<ISearchMoviesState["year"]>
    ) => {
      state.year = action.payload;
    },
    setSearchMoviesType: (
      state,
      action: PayloadAction<ISearchMoviesState["type"]>
    ) => {
      state.type = action.payload;
    },
  },
});

export const {
  setSearchMoviesTitle,
  setSearchMoviesPage,
  setSearchMoviesYear,
  setSearchMoviesType,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
