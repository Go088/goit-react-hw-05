import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../components/movies-api";
import MovieDetail from "../../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

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
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading && <b>Loading...</b>}
      {error && <b>HTTP Error!</b>}
      {moviesData && <MovieDetail moviesData={moviesData} />}
    </div>
  );
}
