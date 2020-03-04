import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
