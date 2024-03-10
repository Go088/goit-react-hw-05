import css from "./MoviesList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ items }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              className={css.link}
              state={location}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
