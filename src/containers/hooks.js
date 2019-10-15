import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

// 将全局的值与设置方法都放在 context 中, 以取代 redux
export function AppProvider({ children }) {
  const [name, setName] = useState('-');
  const [loading, setLoading] = useState();

  const defaultValue = { name, setName, loading, setLoading };

  return <AppContext.Provider value={defaultValue}>{children}</AppContext.Provider>;
}

// 自定义 hook
export function usePersion(id) {
  const { setName, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    async function runEffect() {
      if (id) {
        setLoading(true);

        const { data } = await axios.get(`https://swapi.co/api/people/${id}/`);

        setName(data.name);

        setLoading(false);
      }
    }

    runEffect();

    // eslint-disable-next-line
  }, [id]);

  return loading;
}
