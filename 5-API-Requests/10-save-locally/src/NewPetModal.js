import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

const NewPetModal = ({onCancel, onSave}) => {
  const [name, setName] = useState("");
  const [kind, setKind] = useState("");
  const [photo, setPhoto] = useState(null)
  const photoInput = useRef();

  const updatePhoto = () => {
    const file = photoInput.current.files && photoInput.current.files[0]

    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    // save
    onSave({
      name,
      kind,
      photo
    });
  }
  return (
    <div>
      <Modal isOpen={true} onRequestClose={onCancel}>
        <h2>New Pet</h2>
        <form className="pet-form" onSubmit={submit}>
          {photo && <img alt="pet" src={photo} />}
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" ref={photoInput} onChange={updatePhoto}/>
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