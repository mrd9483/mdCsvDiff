import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import View from '../components/view';
import Diff from '../components/diff';
import Aggregate from '../components/aggregate';
import Home from '../components/home';

const Router = () => (
  <main className="ui main text">
    <div className="main-spacer" />
    <Switch>
      <Route exact path="/view" component={View} />
      <Route path="/diff" component={Diff} />
      <Route path="/aggregate" component={Aggregate} />
      <Route path="*" component={Home} />
    </Switch>
  </main>
);

export default connect()(Router);
