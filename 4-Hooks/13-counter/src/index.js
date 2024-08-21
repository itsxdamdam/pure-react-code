import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

const Counter = () => {
  const [count, setCounter] = useState(0)

  const increment = () => setCounter(count + 1)

  const decrement = () => setCounter(count - 1)

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

createRoot(document.querySelector('#root')).render( <Counter />)