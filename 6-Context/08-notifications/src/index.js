import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, useUser } from "./UserContext";
import './index.css';
import { EmailProvider } from './EmailContext';
import { NotifyProvider } from './NotifyContext';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}
 
createRoot(document.querySelector("#root")).render(
<NotifyProvider>
  <UserProvider>
    <EmailProvider>
      <Root />
    </EmailProvider>
  </UserProvider>  
</NotifyProvider>
)