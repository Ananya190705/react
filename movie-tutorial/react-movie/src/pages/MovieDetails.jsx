import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/movies/details/${id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2 style={{ color: "white", padding: "2rem" }}>Loading...</h2>;
  }

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "6px"
        }}
      >
        ← Back
      </button>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        
        {/* Poster */}
        <img
          src={poster}
          alt={movie.Title}
          style={{ width: "300px", borderRadius: "10px" }}
        />

        {/* Movie Info */}
        <div style={{ maxWidth: "600px" }}>
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>

          {/* Trailer Button */}
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
              movie.Title + " official trailer"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "red",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              marginTop: "20px",
              fontWeight: "bold"
            }}
          >
            ▶ Watch Trailer on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
