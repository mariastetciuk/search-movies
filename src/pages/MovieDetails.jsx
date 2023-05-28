import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovies } from 'API/themoviedbApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const params = `movie/${movieId}`;
  const url = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, []);

  const getYearMovie = date => {
    const dateMovie = new Date(date);
    const year = dateMovie.getFullYear();
    return year;
  };

  return (
    <div>
      <button type="button">go back</button>
      <article>
        <img src={url + movie.poster_path} alt={movie.title} width="300" />
        <h2>
          {movie.title}({getYearMovie(movie.release_date)})
        </h2>
        <p>Vote average: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>

        <h3>Genres</h3>

        {/* <p>{movie.genres.map(genre => genre.name).join(' ')}</p> */}
      </article>
      <section>
        <h2>Additional information</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </section>
    </div>
  );
};

export default MovieDetails;
