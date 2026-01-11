import { useState, useEffect } from "react";

const cardValues = ["🍎","🍌","🍇","🍒","🍉","🍍"];

function MemoryCard() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const shuffled = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value }));
    setCards(shuffled);
  }, []);

  function handleFlip(index) {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].value === cards[second].value) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 800);
    }
  }

  function resetGame() {
    setMatched([]);
    setFlipped([]);
    const shuffled = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value }));
    setCards(shuffled);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{fontSize:40}}>Memory Card Game</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gap: "10px",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => handleFlip(idx)}
            style={{
              width: "100px",
              height: "100px",
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid black",
              cursor: "pointer",
              backgroundColor: flipped.includes(idx) || matched.includes(idx) ? "#fff" : "#888",
            }}
          >
            {(flipped.includes(idx) || matched.includes(idx)) && card.value}
          </div>
        ))}
      </div>
      <button onClick={resetGame} style={{  marginTop: "50px",
          marginLeft:"20px",
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

export default MemoryCard;
