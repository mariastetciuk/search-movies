import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API/themoviedbApi';

const Cast = () => {
  const { movieId } = useParams();

  const url = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const params = `movie/${movieId}/credits`;
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, [movieId]);
  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={`${url}${item.profile_path}`}
              alt={item.name}
              width="150"
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
