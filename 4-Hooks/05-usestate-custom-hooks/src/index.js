import React, { useState } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

function useCoffeeMaker(water, coffee) {
  const [brew, setBrew] = useState({
    water,
    coffee
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

  return {
    water: brew.water,
    coffee: brew.coffee,
    setWater,
    setCoffee
  }
}

function App() {

  const {
    water,
    coffee,
    setWater,
    setCoffee
  } = useCoffeeMaker(6, 10);

  return (
    <div>
      <h1>Coffe Maker</h1>
      <span aria-hidden>☕</span>
      <h2>Water</h2>
      <button onClick={setWater}>{water} oz</button>
      <h2>Coffee</h2>
      <button onClick={setCoffee}>{coffee} g</button>
    </div>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <App />
)