import { useParams } from "react-router-dom";
import { useGetMovieByTitleQuery } from "@/services/api.ts";
import { StyledContainer } from "@/components/Container/Container.styles.ts";
import { StyledText } from "@/components/Text/Text.styles.ts";

const SingleMovie = () => {
  const { title } = useParams();
  const { data, isLoading, isError } = useGetMovieByTitleQuery(title ?? "");

  if (isLoading) return <StyledContainer>Loading...</StyledContainer>;

  if (isError || data?.Error)
    return (
      <StyledContainer>{data?.Error ?? "Something went wrong"}</StyledContainer>
    );

  return (
    <StyledContainer>
      <StyledText>Title: {data?.Title}</StyledText>
      <StyledText>Year: {data?.Year}</StyledText>
      <StyledText>Rated: {data?.Rated}</StyledText>
      <StyledText>Released: {data?.Released}</StyledText>
      <StyledText>Runtime: {data?.Runtime}</StyledText>
      <StyledText>Genre: {data?.Genre}</StyledText>
      <StyledText>Director: {data?.Director}</StyledText>
      <StyledText>Writer: {data?.Writer}</StyledText>
      <StyledText>Actors: {data?.Actors}</StyledText>
      <StyledText>Plot: {data?.Plot}</StyledText>
      <StyledText>Language: {data?.Language}</StyledText>
      <StyledText>Country: {data?.Country}</StyledText>
      <StyledText>Awards: {data?.Awards}</StyledText>
      <StyledText>Metascore: {data?.Metascore}</StyledText>
      <StyledText>imdbRating: {data?.imdbRating} / 10</StyledText>
    </StyledContainer>
  );
};

export default SingleMovie;
