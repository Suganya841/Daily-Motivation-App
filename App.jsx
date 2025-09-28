import React, { useState } from "react";

const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Push harder than yesterday if you want a different tomorrow.",
  "Stay positive, work hard, make it happen.",
  "Don’t stop until you’re proud."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      background: "#f0f4f8" 
    }}>
      <div style={{ 
        background: "#fff", 
        padding: "20px", 
        borderRadius: "12px", 
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
        textAlign: "center" 
      }}>
        <h2>{quote}</h2>
        <button 
          onClick={getNewQuote} 
          style={{ 
            marginTop: "15px", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "8px", 
            background: "#007bff", 
            color: "#fff", 
            cursor: "pointer" 
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;