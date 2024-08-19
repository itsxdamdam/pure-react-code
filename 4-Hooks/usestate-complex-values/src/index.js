import React, { useState } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"


function App() {
  const [brew, setBrew] = useState({
    water: 8,
    coffee: 13
  });

  const setWater = () => {
    setBrew({
      water: brew.water + 1,
      coffee: brew.coffee
    })
  };

  const setCoffee = () => {
    setBrew(brew => {
      return {
        water: brew.water,
        coffee: brew.coffee + 1
      }
    })
  };

  return (
    <div>
      <h1>Coffe Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={setWater}>{brew.water} oz</button>
      <h2>Coffee</h2>
      <button onClick={setCoffee}>{brew.coffee} g</button>
    </div>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <App />
)