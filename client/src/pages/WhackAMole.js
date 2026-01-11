import { useState, useEffect } from "react";

function WhackAMole() {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoleIndex(Math.floor(Math.random() * 9));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  function whack(idx) {
    if (idx === moleIndex) setScore(score + 1);
  }

  function resetGame() {
    setScore(0);
    setMoleIndex(null);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{fontSize:"50px"}}>Whack-a-Mole</h2>
      <p>Score: {score}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "10px",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        {Array(9)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              onClick={() => whack(idx)}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: idx === moleIndex ? "brown" : "#888",
                cursor: "pointer",
              }}
            />
          ))}
      </div>
      <button onClick={resetGame} style={{  marginTop: "50px",
          marginLeft:"3px",
          padding: "12px 25px",
          fontSize: "1.2rem",
          borderRadius: "10px",
          border: "2px solid #f0f0f0",
          backgroundColor: "#1a2e6e",
          color: "#f0f0f0",
          cursor: "pointer", }}>Restart</button>
    </div>
  );
}

export default WhackAMole;