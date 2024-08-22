import React, { useState } from 'react';
import Modal from 'react-modal';

const NewPetModal = ({isOpen, onCancel}) => {
  const [name, setName] = useState("")
  const [kind, setKind] = useState("");
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onCancel}>
        <h2>New Pet</h2>
        <form action="" className="pet-form">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <label htmlFor="kind">Kind</label>
          <select 
            id="kind" 
            value={kind} 
            onChange={(e) => setKind(e.target.value)} 
          >
            <option value="">Choose a kind</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit" >Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default NewPetModal