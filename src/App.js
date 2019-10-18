import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import UseEffect from './UseEffect';
import Fetcher from './Fetcher';

import style from './App.module.less';

function App() {
  return (
    <div className={style.container}>
      <div className={style.mainNav}>
        <NavLink to="/useEffect">使用 useEffect 请求 API</NavLink>
        <NavLink to="/fetcher">将 useEffect 逐步包装</NavLink>
      </div>

      <div className={style.content}>
        <Switch>
          <Route path="/useEffect">
            <UseEffect />
          </Route>

          <Route path="/fetcher">
            <Fetcher />
          </Route>

          <Route path="/">
            <h1>Practise Hook</h1>
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
