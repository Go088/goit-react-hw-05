import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../components/movies-api";
import MovieDetail from "../../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchData = await fetchMovieById(movieId);
        setMoviesData(fetchData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {error && <b>HTTP Error!</b>}
      {moviesData && <MovieDetail moviesData={moviesData} />}
    </div>
  );
}
