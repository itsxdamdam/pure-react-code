import React, { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log('[Demo] render')

  const increment = useCallback(
    () => setCount(oldCount => oldCount + 1), []
  );

  return (
    <div>
      {count}
      <br />
      <Button onClick={increment}/>
    </div>
  )
}

const Button = React.memo(({ onClick }) => {
  console.log('[Button] render');

  return <button onClick={onClick}>Click Me</button>
})

createRoot(document.querySelector("#root")).render(<Demo />)