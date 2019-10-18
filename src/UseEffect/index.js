import React from 'react';

import Navbar from './Navbar';
import Person from './Person';

import { AppProvider } from './hooks';

import './style.css';

function App() {
  return (
    <AppProvider>
      <Navbar />

      <Person />
    </AppProvider>
  );
}

export default App;
