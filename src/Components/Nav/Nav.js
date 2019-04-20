import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  }
});

const indStyles = {
  nav: {
    height: '64px'
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={indStyles.nav}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow} component={Link} to="/">
            mdCsvDiff
          </Typography>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/view">View</Button>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/diff">Diff</Button>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/aggregate">Aggregate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
