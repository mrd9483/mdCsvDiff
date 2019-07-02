/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OpenFilePosition = styled.div`
    margin: 0;
    right: 20px;
    bottom: 20px;
    position: fixed !important;
`;

const OpenTable = ({ onClick }) => (
  <OpenFilePosition>
    <i className="large circular inverted file icon" role="button" tabIndex={0} onClick={onClick} />
  </OpenFilePosition>
);

OpenTable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default OpenTable;
