import css from "./MoviesList.module.css";

import { Link } from "react-router-dom";

export default function MoviesList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} className={css.link}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
