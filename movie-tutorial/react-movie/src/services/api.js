const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "7576ef83";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=Spider-man&type=movie`
  );
  const data = await response.json();

  return data.Search;
};


export const searchMovies = async (query) => {
   const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
    const data = await response.json();

  return data.Search;
};
