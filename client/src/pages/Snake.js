import { useState, useEffect } from "react";

const boardSize = 10;

function Snake() {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Arrow key listener
  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  // Move snake every interval
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 300);
      return () => clearInterval(interval);
    }
  });

  function moveSnake() {
    const head = { ...snake[0] };
    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    // Check collision
    if (
      head.x < 0 ||
      head.x >= boardSize ||
      head.y < 0 ||
      head.y >= boardSize ||
      snake.some((s) => s.x === head.x && s.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];

    // Check food
    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  function resetGame() {
    setSnake([{ x: 0, y: 0 }]);
    setDirection("RIGHT");
    setFood({ x: 5, y: 5 });
    setScore(0);
    setGameOver(false);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "50px" }}>Snake Game</h2>
      <p>Score: {score}</p>
      {gameOver && <h3 style={{ color: "red" }}>Game Over!</h3>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, 20px)`,
          gridTemplateRows: `repeat(${boardSize}, 20px)`,
          gap: "2px",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, idx) => {
          const x = idx % boardSize;
          const y = Math.floor(idx / boardSize);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={idx}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: isSnake ? "green" : isFood ? "red" : "#eee",
                border: "1px solid #ccc",
              }}
            />
          );
        })}
      </div>

      <button
        onClick={resetGame}
        style={{
           marginTop: "50px",
          marginLeft:"30px",
          padding: "12px 25px",
          fontSize: "1.2rem",
          borderRadius: "10px",
          border: "2px solid #f0f0f0",
          backgroundColor: "#1a2e6e",
          color: "#f0f0f0",
          cursor: "pointer",
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

export default Snake;
