import React, { useState } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"


function App() {
  const [water, setOunceWater] = useState(8);
  const [coffee, setGramsCoffee] = useState(13);
  return (
    <div>
      <h1>Coffe Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={() => setOunceWater(water + 1)}>{water} oz</button>
      <h2>Coffee</h2>
      <button onClick={() => setGramsCoffee(coffee + 1)}>{coffee} g</button>
    </div>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <App />
)