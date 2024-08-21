import React, { useReducer, useRef } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const reducer = (state, action) => {
  const { past, present, future } = state;

  switch(action.type) {
    case "ADD":
      return {
        past: [...past, present],
        present: [
          ...present,
          {
            id: Math.random(),
            name: action.value
          }
        ],
        future: [],
        canUndo: true,
        canRedo: false
      };
    case "UNDO":
      if(!state.canUndo) return state;

      return {
        present: past[past.length - 1],
        past: past.slice(0, -1),
        future: [present, ...future],
        canUndo: past.length > 1,
        canRedo: true
      };

    case "REDO":
      if(!state.canRedo) return state;

      const [newPresent, ...newFuture] = future
      return {
        present: newPresent,
        future: newFuture,
        past: [...past, present],
        canUndo: true,
        canRedo: newFuture.length > 0
      };
    default:
      return state;
  }
}

const ShoppingList = () => { 

  const input = useRef();

  const [items, dispatch] = useReducer(reducer, {
    present: [],
    past: [],
    future: [],
    canUndo: false,
    canRedo: false
  });

  const addItem = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      value: input.current.value
    })
    input.current.value = ""
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <form className="add-product" onSubmit={addItem}>
        <label htmlFor="product">Product</label>
        <input type="text" ref={input} id="product" />
        <button>Add</button>
      </form>
      <div className="actions">
        <button disabled={!items.canUndo}
        onClick={() => dispatch({ type: 'UNDO'})}>Undo</button>
        <button disabled={!items.canRedo}
        onClick={() => dispatch({ type: 'REDO'})}>Redo</button>
      </div>
      <ul>
        {items.present.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <ShoppingList />
)