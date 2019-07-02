import React from 'react';
import { connect } from 'react-redux';

import Nav from '../nav';
import Router from '../../routers';


// import './App.css';

const App = function () {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  );
};

export default connect()(App);
