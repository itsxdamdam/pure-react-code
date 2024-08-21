import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const TwoStageRender = () => {
  const [value, setValue] = useState(0);

  // uselayouteffect renders synchronously
  useLayoutEffect(() => {
    if(value === 0) {
      setValue(Math.floor(10 + Math.random() * 200))
    }
  }, [value])

  console.log('render', value);
  
  return <div onClick={() => setValue(0)}>value: {value}</div>
}

createRoot(
  document.querySelector("#root")
).render(
  <TwoStageRender />
)