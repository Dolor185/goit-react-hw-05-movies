import { Link } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, original_title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
