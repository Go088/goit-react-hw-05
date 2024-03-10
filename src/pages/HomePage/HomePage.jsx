import { useEffect, useState } from "react";
import { fetchMovies } from "../../components/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchLoadList = await fetchMovies();
        setMoviesData(fetchLoadList);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <b>Loading...</b>}
      {error && <b>HTTP Error!</b>}
      <MoviesList items={moviesData} />
    </div>
  );
}
