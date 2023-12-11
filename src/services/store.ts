import { api } from "./api.ts";
import { configureStore } from "@reduxjs/toolkit";
import searchMoviesSliceReducer from "@/services/reducers/searchMoviesSlice.ts";

export const setupStore = configureStore({
  reducer: {
    searchMovies: searchMoviesSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;

export default setupStore;
