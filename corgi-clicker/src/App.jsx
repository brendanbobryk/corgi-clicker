import React, { useState } from "react";
import "./App.css"; // optional for extra styling

function App() {
  // state for the score
  const [score, setScore] = useState(0);

  // function to handle clicks
  const handleClick = () => {
    setScore(score + 1);
  };

  // optional message based on milestones
  const getMessage = () => {
    if (score === 0) return "Click the corgi to earn points!";
    if (score < 5) return "Keep going!";
    if (score < 10) return "Corgi is happy! 🐾";
    return "Wow! You love corgis! ❤️";
  };

  return (
    <div style={styles.container}>
      <h1>Corgi Clicker 🐶</h1>
      <p style={styles.score}>Score: {score}</p>
      <button onClick={handleClick} style={styles.button}>
        🐶 Click me!
      </button>
      <p>{getMessage()}</p>
    </div>
  );
}

// simple inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  score: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  button: {
    fontSize: "50px",
    padding: "20px",
    cursor: "pointer",
    borderRadius: "10px",
    border: "2px solid #333",
    backgroundColor: "#ffe0b2",
  },
};

export default App;
