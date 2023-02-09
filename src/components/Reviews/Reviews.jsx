import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Service/MoviedbAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);
  console.log(reviews);

  return reviews.length !== 0 ? (
    <div>
      <ul>
        {reviews.map(({ author, content, created_at, id }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
              <p>{created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <p> We don't have any reviews for this movie</p>
  );
};
