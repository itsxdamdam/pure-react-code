import React, {useState, useRef} from 'react'

const PetForm = ({ pet, onSave, onCancel}) => {
  const initialPet = pet || {
    name: "",
    kind: "",
    photo: null
  }
  const [name, setName] = useState(initialPet.name);
  const [kind, setKind] = useState(initialPet.kind);
  const [photo, setPhoto] = useState(initialPet.photo)
  const [errors, setError] = useState(null )
  const [saving, setSaving] = useState(false)
  const photoInput = useRef();

  const submit = (e) => {
    e.preventDefault()
    setSaving(true);
    // save
    onSave({
      ...pet,
      name,
      kind,
      photo
    }).catch(error => {
      console.log(error);
      setError(error);
      setSaving(false)
    });
  }

  const updatePhoto = () => {
    const file = photoInput.current.files && photoInput.current.files[0]

    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file)
    }
  }

  return (
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

    {errors && errors.name && (
      <div className="error">{errors.name}</div>
    )}

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

    {errors && errors.kind && (
      <div className="error">{errors.kind}</div>
    )}

    <button disabled={saving} type="button" onClick={onCancel}>Cancel</button>
    <button disabled={saving} type="submit" >Save</button>
  </form>
  )
}

export default PetForm
