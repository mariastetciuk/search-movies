import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovies } from 'API/themoviedbApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const params = `movie/${movieId}`;
  const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   async function featch() {
  //     try {
  //       const { data } = await fetchMovies(params);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   featch();
  // }, []);
  return <div></div>;
};

export default MovieDetails;
