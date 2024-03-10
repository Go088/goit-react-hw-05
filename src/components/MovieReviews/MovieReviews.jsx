import { useState, useEffect } from "react";
import { fetchReviews } from "../movies-api";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const fetchData = await fetchReviews(movieId);
        setReviews(fetchData);
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
      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
}
