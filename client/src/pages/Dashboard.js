import { Link } from "react-router-dom";

const buttonStyle = {
  padding: "20px 30px",
  fontSize: "1.2rem",
  cursor: "pointer",
  borderRadius: "10px",
  border: "2px solid #f0f0f0",
  backgroundColor: "#1a2e6e",
  color: "#f0f0f0",
  transition: "0.2s",
};

function Dashboard() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", fontSize:"70px" }}>🎮 Games Arcade Dashboard 🎮</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          justifyItems: "center",
        }}
      >
        <Link to="/dashboard/tictactoe">
          <button style={buttonStyle}>Tic-Tac-Toe</button>
        </Link>
        <Link to="/dashboard/memorycard">
          <button style={buttonStyle}>Memory Card</button>
        </Link>
        <Link to="/dashboard/hangman">
          <button style={buttonStyle}>Hangman</button>
        </Link>
        <Link to="/dashboard/whackamole">
          <button style={buttonStyle}>Whack-a-Mole</button>
        </Link>
        <Link to="/dashboard/snake">
          <button style={buttonStyle}>Snake</button>
        </Link>
        <Link to="/dashboard/simonsays">
          <button style={buttonStyle}>Simon Says</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;