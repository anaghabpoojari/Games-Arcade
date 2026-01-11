import { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow"];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function SimonSays() {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState("");
  const [playing, setPlaying] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  useEffect(() => {
    if (playing) {
      showSequence();
    }
    // eslint-disable-next-line
  }, [sequence]);

  function startGame() {
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence([firstColor]);
    setPlayerSequence([]);
    setLevel(1);
    setMessage("");
    setPlaying(true);
  }

  function showSequence() {
    sequence.forEach((color, idx) => {
      setTimeout(() => {
        setActiveColor(color);
        setTimeout(() => setActiveColor(null), 500);
      }, idx * 700);
    });
  }

  function handleClick(color) {
    if (!playing) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    const idx = newPlayerSequence.length - 1;

    if (color !== sequence[idx]) {
      setMessage(`Game Over! You reached level ${level}`);
      setPlaying(false);
      setSequence([]);
      setPlayerSequence([]);
      setLevel(0);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      const nextColor = colors[Math.floor(Math.random() * colors.length)];
      setSequence([...sequence, nextColor]);
      setPlayerSequence([]);
      setLevel(level + 1);
      setMessage(`Good! Level ${level + 1}`);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{fontSize:"50px"}}>Simon Says</h2>

      {/* Start / Restart Button immediately below heading */}
      <button
        onClick={startGame}
        style={{
          marginLeft:"20px",
          padding: "12px 25px",
          fontSize: "1.2rem",
          borderRadius: "10px",
          border: "2px solid #f0f0f0",
          backgroundColor: "#1a2e6e",
          color: "#f0f0f0",
          cursor: "pointer",
        }}
      >
        {playing ? "Restart" : "Start Game"}
      </button>

      {/* Game messages and level */}
      <p>{message}</p>
      <p>Level: {level}</p>

      {/* Color buttons */}
      <div style={{ margin: "20px" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleClick(color)}
            style={{
              width: "100px",
              height: "100px",
              margin: "10px",
              backgroundColor: color,
              opacity: activeColor === color ? 0.5 : 1,
              transition: "opacity 0.2s",
              cursor: "pointer",
              borderRadius: "15px",
              border: "2px solid #333",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SimonSays;
