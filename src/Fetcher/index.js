import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import Simple from './Simple';
import UseFetcher from './UseFetcher';

export default function Fetcher() {
  const match = useRouteMatch();

  return (
    <div>
      <ol>
        <li>
          <Link to={`${match.url}/simple`}>简单用法</Link>
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
