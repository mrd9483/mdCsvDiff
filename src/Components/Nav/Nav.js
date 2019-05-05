import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size:36px;
  font-weight: bold;
  text-shadow: 3px 3px 3px #222222;
  line-height: 0.8em;
  letter-spacing: 0.1em;
  transform: scaleY(0.7);
  text-decoration: none;
  margin: 0;
  font-variant: small-caps;
  flex-grow: 1;

  :hover {
    text-shadow: 5px 5px 5px #222222;
    color: #eeeeee;
  }
`;

const NavStyle = styled.div`
  height: 64px;
  flex-grow: 1;
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function Nav(props) {
  const { classes } = props;
  return (
    <NavStyle>
      <AppBar position="fixed">
        <Toolbar>
          <StyledLink to="/">mdCsvDiff</StyledLink>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/view">View</Button>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/diff">Diff</Button>
          <Button variant="contained" className={classes.button} color="secondary" component={Link} to="/aggregate">Aggregate</Button>
        </Toolbar>
      </AppBar>
    </NavStyle>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
