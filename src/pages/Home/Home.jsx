import { useEffect, useState } from 'react';
import { fetchMovies } from 'API/themoviedbApi';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css'
const params = 'trending/movie/day';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id} className={css.item}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
