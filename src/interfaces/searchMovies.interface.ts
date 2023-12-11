import { IMovie } from "@/interfaces/movie.interface.ts";

export interface ISearchMovies {
  Search?: ISearch[];
  totalResults?: string;
  Error: string;
  Response: string;
}

type ISearch = Pick<IMovie, "Title" | "Year" | "imdbID" | "Type" | "Poster">;
