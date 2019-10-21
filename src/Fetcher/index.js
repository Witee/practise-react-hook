import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';

import Simple from './Simple';
import UseFetcher from './UseFetcher';

import style from './style.module.less';

export default function Fetcher() {
  const match = useRouteMatch();

  return (
    <div>
      <ol className={style.subnav}>
        <li>
          <NavLink to={`${match.url}/simple`}>简单用法</NavLink>
        </li>
      </ol>

      <Switch>
        <Route path={`${match.url}/simple`}>
          <Simple />
        </Route>

        <Route path={match.url}>学习笔记: https://www.robinwieruch.de/react-hooks-fetch-data</Route>
      </Switch>
    </div>
  );
}
