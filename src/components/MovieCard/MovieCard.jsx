import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'Service/MoviedbAPI';
import { useEffect, useState, Suspense } from 'react';
export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const movieImg = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
    img: movie.poster_path,
  };

  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      <div>
        <img
          src={`${movieImg.base_url}${movieImg.size}${movieImg.img}`}
          alt=""
        />
      </div>
      <div>
        <h1>{movie.original_title}</h1>
        <p>Release date : {movie.release_date}</p>
        <p>Popularity : {movie.popularity}</p>
        <ul>
          <li>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </li>
          <li>Budget : ${movie.budget}</li>
          <li>
            <h2>Genres</h2>
            <ul>
              {movie.genres
                ? movie.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })
                : ''}
            </ul>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
