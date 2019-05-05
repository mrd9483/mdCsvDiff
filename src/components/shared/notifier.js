import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { hideNotification } from '../../actions';


class Notifier extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  };

  handleClose = (event, reason) => {
    const { dispatch } = this.props;

    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideNotification());
  };

  render() {
    const { open, message } = this.props;

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

const mapStateToProps = state => ({
  message: state.notifier.message,
  open: state.notifier.open
});

Notifier.defaultProps = {
  message: '',
  open: false
};

export default connect(mapStateToProps)(Notifier);
