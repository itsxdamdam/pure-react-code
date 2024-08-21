import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function generateData() {
  const t0 = performance.now();
  const data = Array(10000)
    .fill(0)
    .map(() => Math.random())
    .filter(number => number < 0.5);

  const t1 = performance.now();
  console.log(`generated data in ${t1 - t0}ms`);
  return data;
}

const Demo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(generateData)
  // const data = generateData();

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

createRoot(document.querySelector("#root")).render(<Demo />)