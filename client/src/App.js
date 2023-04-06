import React from 'react';
import './App.css';
import Messanger from './component/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './component/context/AccountProvider';

function App() {
  const clientId = "302355596114-orrbk4mmlh6o7l521qb94ctjvgup1cec.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
