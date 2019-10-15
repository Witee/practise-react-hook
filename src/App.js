import React from 'react';

import Navbar from './containers/Navbar';
import Person from './containers/Person';

import { AppProvider } from './containers/hooks';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Navbar />

      <Person />
    </AppProvider>
  );
}

export default App;
