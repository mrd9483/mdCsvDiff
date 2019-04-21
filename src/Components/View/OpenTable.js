import React from 'react';
import Fab from '@material-ui/core/Fab';
import DescriptionIcon from '@material-ui/icons/Description';
import styled from 'styled-components';

const StyledFab = styled(Fab)`
    margin: 0;
    right: 20px;
    bottom: 20px;
    position: fixed !important;
`;

const OpenTable = () => (
  <StyledFab color="secondary" position="fixed">
    <DescriptionIcon />
  </StyledFab>
);

export default OpenTable;
