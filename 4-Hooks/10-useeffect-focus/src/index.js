import React, { useRef, useState, useEffect } from 'react';
import { createRoot} from "react-dom/client";
import "./index.css"

const LoginForm = () => {
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if(error) {
      error.field.focus();
    }
  }, [error])

  const handleSubmit = e => {
    e.preventDefault();

    if(username === "dave" && password === "pass") {
      setUsername('');
      setPassword('')
    } else {
      if(username !== "dave") {
        setError({
          message: "Invalid username",
          field: usernameRef.current
        })
      } else if(password !== "pass") {
        setError({
          message: "Invalid password",
          field: passwordRef.current
        })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="error">
          {error.message}
        </div>
      )}
      <label htmlFor="username">Username</label>
      <input ref={usernameRef}
        type="text" 
        value={username}
        id="username"
        onChange={e => setUsername(e.target.value)} 
      />

      <label htmlFor="username">Password</label>
      <input ref={passwordRef} 
       type="password"
       id="password"
       value={password}
       onChange={e => setPassword(e.target.value)} 
      />

      <button type="submit">Log in</button>
    </form>
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <LoginForm />
)