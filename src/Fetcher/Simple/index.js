import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Simple() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://hn.algolia.com/api/v1/search?query=redux');

      setData(res.data.hits);
    };

    fetchData();
  }, [setData]);

  return (
    <div>
      <p>加载页面后请求接口</p>
      <ul>
        {data.map(item => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
