import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../../components/movies-api";
import { useSearchParams } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData(query) {
      try {
        setIsLoading(true);
        setError(false);
        const fetchLoadList = await fetchSearchMovies(query);
        setMovies(fetchLoadList);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData(query);
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
    setQuery(value);
  };

  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {error && <b>HTTP Error!</b>}
      <SearchBox onSearch={handleSubmit} />
      <MoviesList items={movies} />
    </div>
  );
}
