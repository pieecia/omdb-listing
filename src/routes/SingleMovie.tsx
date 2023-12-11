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

  const keys = [
    "Title",
    "Year",
    "Rated",
    "Released",
    "Runtime",
    "Genre",
    "Director",
    "Writer",
    "Actors",
    "Plot",
    "Language",
    "Country",
    "Awards",
    "Metascore",
    "imdbRating",
  ] as const;

  return (
    <StyledContainer>
      {keys.map((key) => (
        <StyledText key={key}>
          {key}: {data?.[key]}
        </StyledText>
      ))}
    </StyledContainer>
  );
};

export default SingleMovie;
