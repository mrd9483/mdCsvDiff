import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ViewTable from './viewTable';
import OpenTable from './openTable';
import OpenFile from './utilities/parseFile';

import {
  displayNotification,
  hideNotification,
  setTimeoutId,
  setData
} from '../../actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 'auto',
    marginTop: 25,
    width: 500
  }
});

class View extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    rows: PropTypes.array,
    columns: PropTypes.array,
    classes: PropTypes.object.isRequired
  };

  static defaultProps = {
    rows: [],
    columns: []
  }

  handleOpenFile = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(displayNotification('Loading'));

    OpenFile()
      .then((data) => {
        const columns = data.columns.map(col => col.value);

        const rows = data.rows.map((row) => {
          const retVal = [];
          for (const col of data.columns) {
            retVal.push(row[col.value]);
          }

          return retVal;
        });

        dispatch(setData({ rows, columns }));
        dispatch(hideNotification());
      })
      .catch((err) => {
        dispatch(displayNotification(err.message));
        const timeoutId = setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);

        dispatch(setTimeoutId(timeoutId));
      });

    return '';
  };

  render() {
    const { rows, columns, classes } = this.props;

    return (
      <div>
        {rows.length === 0 &&
          (
            <div>
              <Paper className={classes.root} elevation={9}>
                <Typography variant="h5" component="h3">
                  No records found
                </Typography>
                <Typography component="p">
                  Please select a csv file from the file on the bottom right corner
                </Typography>
              </Paper>
            </div>
          )}

        {rows.length > 0 &&
          (
            <ViewTable rows={rows} columns={columns} />
          )}

        <OpenTable onClick={this.handleOpenFile} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: state.viewData.rows,
  columns: state.viewData.columns
});

export default withStyles(styles)(connect(mapStateToProps)(View));
