import React, { useState, useEffect } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const UpdateTitle = () => { 

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0)


  // all side effects should go in a useEffect
  useEffect(() => {
    document.title = name;
    console.log("set title", name)
  }, [name])

  return (
    <main>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="number">Number</label>
      <input id="number" value={number} onChange={e => setNumber(e.target.value)} />
    </main>
  )  
}

createRoot(
  document.querySelector("#root")
).render(
  <UpdateTitle />
)