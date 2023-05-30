import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovies } from 'API/themoviedbApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const url = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const params = `movie/${movieId}`;
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, [movieId]);

  const getYearMovie = date => {
    const dateMovie = new Date(date);
    const year = dateMovie.getFullYear();
    return year;
  };

  return (
    <div>
      <Link to={backLinkLocationRef.current}>go back</Link>
      <article className={css.article}>
        <img
          src={movie.poster_path ? url + movie.poster_path : ''}
          alt={movie.title}
          width="350"
          height="450"
        />
        <div className={css.wraper}>
          <h2 className={css.title}>
            {movie.title}({getYearMovie(movie.release_date)})
          </h2>
          <p className={css.text}>
            User Score: {(movie.vote_average * 10).toFixed()}%
          </p>
          <h3 className={css.title}>Overview</h3>
          <p className={css.text}>{movie.overview}</p>
          <h3 className={css.title}>Genres</h3>
          <p className={css.text}>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>
        </div>
      </article>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li className={css.item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default MovieDetails;
