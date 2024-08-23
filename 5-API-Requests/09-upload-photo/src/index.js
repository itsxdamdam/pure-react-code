import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import NewPetModal from "./NewPetModal";
import Pet from './Pet';
import './index.css';
import Modal from 'react-modal';

const App = () => {
  const [pets, setPets] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch("http://localhost:3001/pets");
      const pets = await res.json();
      setPets(pets);
      setLoading(false);
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
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <ul>
            {pets.map(pet => (
              <li key={pet.id}>
                <Pet pet={pet} />
              </li>
            ))}
          </ul>
          <button onClick={() => setNewPetOpen(true)}>Add a Pet</button>
        </>
      )}
      {isNewPetOpen && ( <NewPetModal 
        isOpen={isNewPetOpen} 
        onCancel={() => setNewPetOpen(false)}
      /> )}
    </main>
  );
};

const el = document.querySelector("#root")
Modal.setAppElement(el)
createRoot(el).render(<App />)