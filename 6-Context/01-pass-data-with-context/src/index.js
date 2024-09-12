import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import './index.css'

function Root() {
  const [ user, setUser ] = useState(null);

  const login = user => setUser(user)
  const logout = () => setUser(null);

  return user ? (
    <MainPage currentUser={user} onLogout={logout} />
  ) : (
    <LoginPage onLogin={login} />
  )
}

createRoot(
  document.querySelector("#root")
).render(
  <Root />
)