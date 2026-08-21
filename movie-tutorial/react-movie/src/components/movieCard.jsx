import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MovieCard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addFavorite, removeFavorite } from "../services/api";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  const imdbID = movie.imdbID;
  const title = movie.Title || movie.title;
  const poster = movie.Poster || movie.poster;

  // Check if this movie exists in localStorage favorites
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.some((fav) => fav.imdbID === imdbID);
    setIsFav(exists);
  }, [imdbID]);

  async function onFavorite(e) {
    e.stopPropagation();

    try {
      if (isFav) {
        await removeFavorite(imdbID);

        const updated = (
          JSON.parse(localStorage.getItem("favorites")) || []
        ).filter((fav) => fav.imdbID !== imdbID);

        localStorage.setItem("favorites", JSON.stringify(updated));
        setIsFav(false);
      } else {
        const newFav = {
          title: title,
          imdbID: imdbID,
          poster: poster
        };

        await addFavorite(newFav);

        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        localStorage.setItem(
          "favorites",
          JSON.stringify([...stored, newFav])
        );

        setIsFav(true);
      }
    } catch (error) {
      console.error("Favorite error:", error);
    }
  }

  const hasImage =
    poster && poster !== "N/A" && poster.trim() !== "";

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${imdbID}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="movie-poster">
        {hasImage ? (
          <img src={poster} alt={title} />
        ) : (
          <div className="no-poster">
            <h3>{title}</h3>
          </div>
        )}

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFav ? "active" : ""}`}
            onClick={onFavorite}
          >
            {isFav ? (
              <AiFillHeart style={{ color: "red", fontSize: "1.8rem" }} />
            ) : (
              <AiOutlineHeart style={{ color: "white", fontSize: "1.8rem" }} />
            )}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
