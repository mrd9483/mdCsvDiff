import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewTable from './viewTable';
import OpenTable from './openTable';
import OpenFile from './utilities/parseFile';

import { displayNotification } from '../../actions';
import { Columns, Rows } from '../../utilities/fakeStuff';

class View extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  handleOpenFile = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = OpenFile();
    if (typeof (data) === 'object' && data.type) {
      dispatch(displayNotification(data.message));
    }

    return '';
  };

  render() {
    return (
      <div>
        <ViewTable rows={Rows} columns={Columns} />
        <OpenTable onClick={this.handleOpenFile} />
      </div>
    );
  }
}

export default connect()(View);
