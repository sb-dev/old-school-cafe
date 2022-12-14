import './App.css';

import React, { useEffect, useState } from 'react';

import Auth from '../../api';
import Routes from '../router/Routes';

function App({ history }: any) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const result = await Auth.isSignedIn();
      userHasAuthenticated(!!result);
    } catch(e) {
      console.error(JSON.stringify(e));
    }
  }

  async function handleLogout() {
    Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    <Routes appProps={{isAuthenticated, userHasAuthenticated, handleLogout}}/>
  );
}

export default App;
