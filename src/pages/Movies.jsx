import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API/themoviedbApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const params = 'search/movie';
    const queryParams = `query=${query}`;
    async function featch() {
      try {
        const { data } = await fetchMovies(params, queryParams);
        setMovies(data.results);

        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.input.value });
    event.target.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Movies;
