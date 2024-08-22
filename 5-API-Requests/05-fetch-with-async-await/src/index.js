import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Pet from './Pet';
import './index.css';

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3001/pets")
      const pets = await res.json();
      setPets(pets);
    }

    getData();
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:3001/pets")
  //   .then(res => res.json())
  //   .then(pets => setPets(pets))
  // }, [])

  return (
    <main>
      <h1>Adopt-a-Pet</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <Pet pet={pet} />
          </li>
        ))}
      </ul>
      <button>Add a Pet</button>
    </main>
  );
};

createRoot(document.querySelector("#root")).render(<App />)