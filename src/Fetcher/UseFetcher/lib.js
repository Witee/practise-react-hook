import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://hn.algolia.com',
  timeout: 1000000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const initialState = {
  isLoading: false,
  isError: false,
  data: { hits: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload };

    case 'FETCH_ERROR':
      return { ...state, isLoading: false, isError: true };

    default:
      return new Error('Fetcher action type error.');
  }
};

export default function useFetcher() {
  const [config, setConfig] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let didCancel = false;

    const runEffect = async () => {
      if (config) {
        dispatch({ type: 'FETCH_REQUEST' });

        try {
          const result = await fetcher(config);

          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_ERROR' });
          }
        }
      }
    };

    runEffect();

    return () => {
      didCancel = true;
    };
  }, [config]);

  return [state, setConfig];
}
