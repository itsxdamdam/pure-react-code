import React, { useState, useEffect } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const Timeout = () => {
  const [time, setTime] = useState(1000);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      console.log('tick', time);
    }, time);

    return () => {
      clearInterval(timer)
    }

  }, [time]);

  return (
    <div>
      <h1>Timer</h1>
      <input 
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <button onClick={() => setRandom(Math.random())}>
        Re-render
      </button>
    </div>  
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <Timeout />
)