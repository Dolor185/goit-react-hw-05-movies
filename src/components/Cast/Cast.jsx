import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'Service/MoviedbAPI';
export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCasts(movieId).then(res => setCasts(res.cast));
  }, [movieId]);
  return (
    <ul>
      {casts.map(({ name, id, profile_path, character }) => {
        const castImg = {
          base_url: 'https://image.tmdb.org/t/p/',
          size: 'w200',
          img: profile_path,
        };
        if (!castImg.img) {
          return '';
        }
        return (
          <li key={id}>
            <img
              src={`${castImg.base_url}${castImg.size}${castImg.img}`}
              alt={name}
            />
            <p> {name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
