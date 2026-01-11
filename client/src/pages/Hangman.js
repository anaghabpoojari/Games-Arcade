import { useState } from "react";

const words = ["REACT", "JAVASCRIPT", "HTML", "CSS", "MONGODB", "WEBSITE", "WEBPAGE", "NODE", "MERN"];

function Hangman() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessed, setGuessed] = useState([]);
  const [wrong, setWrong] = useState(0);
  const maxWrong = 6;

  function handleGuess(letter) {
    if (guessed.includes(letter)) return;

    setGuessed([...guessed, letter]);
    if (!word.includes(letter)) setWrong(wrong + 1);
  }

  function restartGame() {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setGuessed([]);
    setWrong(0);
  }

  const displayWord = word
    .split("")
    .map((l, i) => (guessed.includes(l) ? l : "_"))
    .join(" ");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{fontSize:"50px"}}>Hangman</h2>
      <p>Wrong guesses: {wrong} / {maxWrong}</p>
      <p style={{ fontSize: "20px", letterSpacing: "10px" }}>{displayWord}</p>
      <div style={{ margin: "20px" }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessed.includes(letter) || wrong >= maxWrong}
            style={{ margin: "2px", width: "35px", height: "35px" }}
          >
            {letter}
          </button>
        ))}
      </div>
      {wrong >= maxWrong && <h3>Game Over! Word was: {word}</h3>}
      {displayWord.replace(/ /g, "") === word && <h3>You Won!</h3>}
      <button onClick={restartGame} style={{  marginTop: "50px",
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

export default Hangman;
