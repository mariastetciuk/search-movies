import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovies } from 'API/themoviedbApi';
// import css from './MovieDetails.module.css';
import { BiArrowBack } from 'react-icons/bi';
import {
  StyledLink,
  Wrapper,
  Title,
  Title2,
  Text,
  Item,
  Article,
} from './MovieDetails.styled';

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
      <Wrapper>
        <BiArrowBack />
        <StyledLink to={backLinkLocationRef.current}>go back</StyledLink>
      </Wrapper>
      <Article>
        <img
          src={movie.poster_path ? url + movie.poster_path : ''}
          alt={movie.title}
          width="350"
          height="450"
        />
        <div>
          <Title>
            {movie.title}({getYearMovie(movie.release_date)})
          </Title>
          <Text>User Score: {(movie.vote_average * 10).toFixed()}%</Text>
          <Title2>Overview</Title2>
          <Text>{movie.overview}</Text>
          <Title2>Genres</Title2>
          <Text>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(' ')
              : ''}
          </Text>
        </div>
      </Article>
      <section>
        <h3>Additional information</h3>
        <ul>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default MovieDetails;
