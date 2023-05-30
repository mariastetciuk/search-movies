import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'API/themoviedbApi';
import css from './Cast.module.css';

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
      <ul className={css.list}>
        {cast.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <img
                className={css.img}
                src={item.profile_path ? `${url}${item.profile_path}` : ''}
                alt={item.name}
                width="150"
              />
              <h3 className={css.name}>{item.name}</h3>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cast;
