import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Container } from 'semantic-ui-react';
import styled from 'styled-components';

import ViewTable from './viewTable';
import OpenTable from './openTable';
import OpenFile from './utilities/parseFile';

import {
  displayNotification,
  hideNotification,
  setTimeoutId,
  setData
} from '../../actions';

const ContainerTopMargin = styled(Container)`
    padding-top:20px;
`;

class View extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    rows: PropTypes.array,
    columns: PropTypes.array
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
    const { rows, columns } = this.props;

    return (
      <div>
        {rows.length === 0 &&
          (
            <ContainerTopMargin>
              <Message>
                <div className="header">
                    No records found
                </div>
                <p>
                    Please select a csv file from the file on the bottom right corner
                </p>
              </Message>
            </ContainerTopMargin>
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

export default connect(mapStateToProps)(View);
