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
    <section>
      {cast.length === 0 && <p>We don`t have any cast for this movie</p>}
      <ul>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <img
                src={item.profile_path ? `${url}${item.profile_path}` : ''}
                alt={item.name}
                width="150"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cast;
