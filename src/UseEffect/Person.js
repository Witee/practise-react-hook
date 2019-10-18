import React, { useState, useContext } from 'react';

import { usePersion, AppContext } from './hooks';

function Persion() {
  const { name, loading } = useContext(AppContext);

  const [currentName, setCurrentName] = useState();

  usePersion(currentName);

  return (
    <div>
      <p>You clicked: {currentName}</p>

      <p>Remote name: {loading ? 'Loading...' : name}</p>

      <button onClick={() => setCurrentName(1)}>Fetch P1</button>
      <button onClick={() => setCurrentName(2)}>Fetch P2</button>
    </div>
  );
}

export default Persion;
