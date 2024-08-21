import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Countdown from "./Countdown.js"
import './index.css';

const App = () => {
  const [startTime, setstartTime] = useState(30)

  return (
    <div>
      <label>
        set the timer
        <br />
        <input 
          type="range" 
          value={startTime} 
          onChange={e => setstartTime(e.target.value)}
        />
      </label>
      <Countdown startTime={startTime} /> 
    </div>
  );
};

createRoot(document.querySelector('#root')).render( <App />)