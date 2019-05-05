import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import { connect } from 'react-redux';

import Nav from './Components/Nav/Nav';
import DiffRoute from './DiffRoute';
import Notifier from './Components/Shared/Notifier';

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
      <DiffRoute />
      <Notifier />
    </MuiThemeProvider>
  );
};

export default connect()(App);
