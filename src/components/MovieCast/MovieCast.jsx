import { useState, useEffect } from "react";
import { fetchMovieCast } from "../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchData = await fetchMovieCast(movieId);
        setCast(fetchData);
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
      <ul className={css.list}>
        {cast &&
          cast.cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} className={css.item}>
                <div className={css.wrap}>
                  <img
                    className={css.img}
                    src={`http://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                  />
                </div>

                <p className={css.name}>{name}</p>
                <p className={css.character}> Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
