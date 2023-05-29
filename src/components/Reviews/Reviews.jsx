import { useState, useEffect } from 'react';
import { fetchMovies } from 'API/themoviedbApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const params = `movie/${movieId}/reviews`;
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, [movieId]);
  return (
    <section>
      {reviews.length === 0 && <h2>We don't have ary reviews this movie</h2>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
