import { useState } from "react";

function App() {
  const [querry, setQuerry] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [error, setError] = useState("");

  const searchRecipies = async (e) => {
    e.preventDefault();
    if (!querry.trim()) return;

    try {
      setError("");
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${querry}`
      );
      const data = await res.json();

      if (data.meals) {
        setRecipies(data.meals);
      } else {
        setError("No recipes found");
        setRecipies([]);
      }
    } catch (err) {
      setError("Failed to fetch recipes");
    }
  };
  return (
    <div style={styles.container}>
      <h1>🍴 Recipe Finder</h1>
      <form onSubmit={searchRecipies} style={styles.form}>
        <input
          type="text"
          placeholder="Search Recipes..."
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
           style={styles.input}
        />
        <button style={styles.button}>Search</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={styles.grid}>
        {recipies.map((recipe) => (
          <div key={recipe.idMeal} style={styles.card}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={styles.img}
            />
            <h3>{recipe.strMeal}</h3>
            <p>
              {recipe.strArea}-{recipe.strCategory}
            </p>
            {recipe.strSource || recipe.strYoutube ? (
              <a
                href={recipe.strSource || recipe.strYoutube}
                target="_blank"
                rel="noreferrer"
              >
                View Recipe
              </a>
            ) : (
              <p>No recipe link available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
  const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to right, #fff1eb, #ace0f9)",
    minHeight: "100vh",
  },

  form: {
    marginBottom: "30px",
  },

  input: {
    padding: "12px 20px",
    fontSize: "16px",
    width: "300px",
    borderRadius: "25px",
    border: "1px solid #ddd",
    outline: "none",
     color: "#333",
     backgroundColor: "white"
  },

  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "25px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#ff6b6b",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};
export default App;
