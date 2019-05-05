import React from 'react';
import Fab from '@material-ui/core/Fab';
import DescriptionIcon from '@material-ui/icons/Description';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFab = styled(Fab)`
    margin: 0;
    right: 20px;
    bottom: 20px;
    position: fixed !important;
`;

const OpenTable = ({ onClick }) => (
  <StyledFab color="secondary" position="fixed">
    <DescriptionIcon onClick={onClick} />
  </StyledFab>
);

OpenTable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default OpenTable;
