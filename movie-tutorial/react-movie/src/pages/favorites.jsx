import "../css/Favorites.css";
import { useMovieContext } from "../context/moviecontext";
import MovieCard from "../components/movieCard";
function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
export default Favorite;
