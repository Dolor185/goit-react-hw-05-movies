import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'Service/MoviedbAPI';
export const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCasts(movieId).then(res => setCasts(res));
  });
  console.log(casts);
  return <div>casts</div>;
};
