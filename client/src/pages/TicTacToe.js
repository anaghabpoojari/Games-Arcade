import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(idx) {
    if (board[idx] || winner) return;
    const newBoard = [...board];
    newBoard[idx] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!xTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  return (
    <div className="page-container">
    <h2 style={{ fontSize: "40px", textAlign:"center" }}>Tic Tac Toe</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 120px)",
          gridTemplateRows: "repeat(3, 120px)",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {board.map((cell, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              backgroundColor: "#1a2e6e",
              color: "#f0f0f0",
              fontSize: "2.5rem",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "3px solid #f0f0f0",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {cell}
          </div>
        ))}
      </div>
      
      <p style={{ fontSize: "1.2rem", textAlign:"center" }}>
        {winner ? `Winner: ${winner}` : `Turn: ${xTurn ? "X" : "O"}`}
      </p>

      <button
        onClick={resetGame}
        style={{
          marginTop: "50px",
          marginLeft:"570px",
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

function calculateWinner(b) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, c, d] of lines) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return null;
}

export default TicTacToe;