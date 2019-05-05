import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notifier extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    open: PropTypes.bool
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
      />
    );
  }
}

/*
const mapStateToProps = state => ({
  message: state.message
});
*/

const mapStateToProps = (state) => {
  console.log('map state to pros hit');

  return {
    message: state.notifier.message
  };
};


Notifier.defaultProps = {
  message: '1',
  open: true
};

export default connect(mapStateToProps)(Notifier);
