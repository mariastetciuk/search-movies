import axios from 'axios';

export async function fetchMovies(params) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '3ecc7363f263881322228195a13f9a25';

  return await axios.get(
    `${BASE_URL}${params}?api_key=${API_KEY}&language=en-US`
  );
}
// ?language=en-US`, {
//         headers: {
//             Accept: "application/json",
//             Authorization: API_KEY
//         },
