import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import css from './App.module.css';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
