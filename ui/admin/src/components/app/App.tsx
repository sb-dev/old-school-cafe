import './App.css';

import React, { useState } from 'react';

import { Layout } from '../layout';
import Routes from '../router/Routes';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <Routes appProps={{isAuthenticated, userHasAuthenticated}}/>
  );
}

export default App;
