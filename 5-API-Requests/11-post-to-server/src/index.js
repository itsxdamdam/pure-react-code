import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import NewPetModal from "./NewPetModal";
import Pet from './Pet';
import './index.css';
import Modal from 'react-modal';
import { createPet, listPets } from './api';

const App = () => {
  const [pets, setPets] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    listPets()
      .then(pets => setPets(pets))
      .finally(() =>  setLoading(false))
  }, [])

  const addPet = async (pet) => {
    return createPet(pet).then(newPet => {
        setPets([ ...pets, newPet])
        setNewPetOpen(false);
    })
  }

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
        onCancel={() => setNewPetOpen(false)}
        onSave={addPet}
      /> )}
    </main>
  );
};

const el = document.querySelector("#root")
Modal.setAppElement(el)
createRoot(el).render(<App />)