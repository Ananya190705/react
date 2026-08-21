export const getPopularMovies = async () => {
  const response = await fetch(
    `http://localhost:5000/api/movies/search?q=spider-man`
  );

  const data = await response.json();
  return data.Search;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `http://localhost:5000/api/movies/search?q=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  return data.Search;
};

// Get all favorites
export const getFavorites = async () => {
  const response = await fetch("http://localhost:5000/api/favorites");
  return response.json();
};

// Add favorite
export const addFavorite = async (movie) => {
  const response = await fetch("http://localhost:5000/api/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  return response.json();
};

// Remove favorite
export const removeFavorite = async (imdbID) => {
  const response = await fetch(
    `http://localhost:5000/api/favorites/${imdbID}`,
    {
      method: "DELETE"
    }
  );

  return response.json();
};