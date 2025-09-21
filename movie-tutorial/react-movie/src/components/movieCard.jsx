import "../css/MovieCard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useMovieContext } from "../context/moviecontext";
import Favorite from "../pages/favorites";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();
  const favorites = isFavorite(movie.imdbID);
  function onFavorite(e) {
    e.preventDefault();
    if (favorites) removeFavorites(movie.imdbID);
    else addToFavorites(movie);
  }

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={movie.Title} />

        <div className="movie-overplay">
          <button
            className={`favorite-btn ${favorites ? "active" : ""}`}
            onClick={onFavorite}
          >
            {favorites ? (
              <AiFillHeart style={{ color: "red", fontSize: "2rem" }} />
            ) : (
              <AiOutlineHeart style={{ color: "white", fontSize: "2rem" }} />
            )}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
