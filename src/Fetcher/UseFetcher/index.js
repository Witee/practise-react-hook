import React from 'react';

import useFetcher from './lib';

export default function Fetcher() {
  const config = {
    url: '/api/v1/search',
    method: 'get',
  };
  const [{ data, isLoading, isError }, fetchData] = useFetcher();

  return (
    <>
      <button onClick={() => fetchData(config)}>Start to fetch data</button>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading data ...</div>
      ) : (
        <ul>
          {data.hits.map((d, index) => {
            return (
              <li key={d.objectID}>
                {d.author} - {index}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
