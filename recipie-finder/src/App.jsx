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
      <h1>🍴 Recipie Finder</h1>
      <form onSubmit={searchRecipies} style={styles.form}>
        <input
          type="text"
          placeholder="Search Recipes..."
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
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
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  form: { marginBottom: "20px" },
  input: { padding: "10px", fontSize: "16px", width: "250px" },
  button: { padding: "5px", fontSize: "18px",borderRadius:"15px", marginLeft: "10px",textAlign:"center" },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};
export default App;
