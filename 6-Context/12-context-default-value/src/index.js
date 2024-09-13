import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'


const Color = React.createContext();

const FancyButton = props => {
  const color = useContext(Color);

  if(typeof color === "undefined") {
    throw new Error ('FancyButton requires a Color Provider')
  };

  return (
    <button className={`fancy-btn ${color}`}{...props}>
      Click Me
    </button>
  )
}

const App = () => (
  <div>
    <FancyButton />
    <Color.Provider value="red">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="green">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="blue">
      <FancyButton />
    </Color.Provider>
  </div>
);

createRoot(document.querySelector('#root')).render(<App />)