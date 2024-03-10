import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      <h1>Oops! Not found</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}
