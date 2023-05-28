import { useEffect, useState } from 'react';
import { fetchMovies } from 'API/themoviedbApi';
import { Link } from 'react-router-dom';
const params = 'trending/movie/day';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

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
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
