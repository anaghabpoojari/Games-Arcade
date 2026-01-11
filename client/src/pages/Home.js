import { Link } from "react-router-dom";
import ArcadeImage from "../assets/arcade.png"; // adjust path based on where your image is

function Home() {
  return (
    <div className="page-container">
      <h1 style={{ fontSize: "70px", textAlign: "center" }}>
        🎮 Welcome to Games Arcade 🎮
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        <Link to="/login">
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "2px solid #f0f0f0",
              backgroundColor: "#1a2e6e",
              color: "#f0f0f0",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "2px solid #f0f0f0",
              backgroundColor: "#1a2e6e",
              color: "#f0f0f0",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src={ArcadeImage}
          alt="Arcade"
          style={{ maxWidth: "80%", height: "auto", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
}

export default Home;
