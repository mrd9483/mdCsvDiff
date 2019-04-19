import React from 'react';
import { Switch, Route } from 'react-router-dom';
import View from './Pages/View';
import Diff from './Pages/Diff';
import Aggregate from './Pages/Aggregate';
import Home from './Pages/Home';

const DiffRoute = () => (
  <main>
    <Switch>
      <Route exact path="/view" component={View} />
      <Route path="/diff" component={Diff} />
      <Route path="/aggregate" component={Aggregate} />
      <Route path="*" component={Home} />
    </Switch>
  </main>
);

export default DiffRoute;
