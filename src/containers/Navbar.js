import React, { useContext } from 'react';

import { AppContext } from './hooks';

function NavBar() {
  const { name, loading } = useContext(AppContext);

  return (
    <div className="navbar">
      <p>React</p>
      <p>current user: {loading ? 'Loading...' : name}</p>
      <p>Hooks</p>
    </div>
  );
}

export default NavBar;
