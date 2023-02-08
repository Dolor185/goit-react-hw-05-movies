import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Header } from './Header/Header';
import { Movies } from 'Pages/Movies/Movies';
import { MovieCard } from './MovieCard/MovieCard';
import { MovieCast } from './MovieCast/MovieCast';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<MovieCast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
