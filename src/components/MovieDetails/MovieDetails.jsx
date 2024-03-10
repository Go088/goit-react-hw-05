import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieDetails.module.css";

export default function MovieDetail({ moviesData }) {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  const imgUrl = moviesData.poster_path
    ? `http://image.tmdb.org/t/p/w500${moviesData.poster_path}`
    : defaultImg;
  const genres = moviesData.genres.map((genre) => genre.name).join(` `);

  return (
    <div>
      <div className={css.wrapper}>
        <img className={css.img} src={imgUrl} alt={moviesData.title} />
        <ul className={css.list}>
          <li>
            <h2 className={css.title}>{moviesData.title}</h2>
          </li>
          <li>
            <h4>Overview</h4>
          </li>
          <li>
            <p>{moviesData.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
          </li>
          <li>
            <p>{genres}</p>
          </li>
          <li>
            <p>Release date: {moviesData.release_date}</p>
          </li>
        </ul>
      </div>
      <div className={css.infoWrap}>
        <p>Additional information</p>
        <ul className={css.infoList}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
