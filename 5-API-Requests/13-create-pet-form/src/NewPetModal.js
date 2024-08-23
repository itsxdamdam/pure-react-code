import React from 'react';
import Modal from 'react-modal';
import PetForm from './PetForm';

const NewPetModal = ({onCancel, onSave}) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onCancel}>
        <h2>New Pet</h2>
        <PetForm onCancel={onCancel} onSave={onSave} />
      </Modal>
    </div>
  )
}

export default NewPetModal