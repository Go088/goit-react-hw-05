import { useEffect, useState } from "react";
import fetchMovies from "../../components/movies-api";

export default function HomePage() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchMovies();
        setMoviesData(data);
        console.log(data);
      } catch (error) {
        error;
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
