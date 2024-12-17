import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { useUser } from './UserContext';
import Providers from './Providers';
import './index.css';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}


 
createRoot(document.querySelector("#root")).render(
  <Providers>
    <Root />
  </Providers>
)