import React, { useRef } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  console.log(usernameRef);
  const handleSubmit = e => {
    e.preventDefault();

    console.log(
      usernameRef.current.value, passwordRef.current.value 
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input ref={usernameRef} type="text" name="username" id="username" />

      <label htmlFor="username">Password</label>
      <input ref={passwordRef} type="password" name="password" id="password" />

      <button type="submit">Log in</button>
    </form>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <LoginForm />
)