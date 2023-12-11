import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "@/interfaces/movie.interface.ts";
import { ISearchMovies } from "@/interfaces/searchMovies.interface.ts";
import { ISearchMoviesState as ISearchMoviesPayload } from "@/services/reducers/searchMoviesSlice.ts";

const APIKEY = import.meta.env.VITE_OMDB_API_KEY;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovieByTitle: builder.query<IMovie, string>({
      query: (title) => `?apikey=${APIKEY}&t=${title}`,
    }),
    searchMovies: builder.query<ISearchMovies, ISearchMoviesPayload>({
      query: ({ title, page = 1, year, type }) => {
        const yearQuery = year ? `&y=${year}` : "";
        const typeQuery = type ? `&type=${type}` : "";

        return `?apikey=${APIKEY}&s=${title}&page=${page}${yearQuery}${typeQuery}`;
      },
    }),
  }),
});

export const { useGetMovieByTitleQuery, useSearchMoviesQuery } = api;
