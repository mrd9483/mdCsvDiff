import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import { connect } from 'react-redux';

import Nav from '../nav';
import Router from '../../routers';
import Notifier from '../shared/notifier';

// import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: { main: '#00695f' },
    error: red,
    background: {
      paper: '#ffffff',
      default: '#fafafa'
    }
  },
  typography: { useNextVariants: true }
});

const App = function () {
  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
      <CssBaseline />
      <Router />
      <Notifier />
    </MuiThemeProvider>
  );
};

export default connect()(App);
