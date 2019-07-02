import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Table, TableHeader, TableHeaderCell, TableRow, TableBody, TableCell
} from 'semantic-ui-react';

const StickyTableHeaderCell = styled(TableHeaderCell)`
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 62px;
`;

const columnView = columns => columns.map(col => (
  <StickyTableHeaderCell key={col}>
    {col}
  </StickyTableHeaderCell>
));

const rowView = rows => rows.map((row, i) => {
  const cells = row.map((cell, j) => (
    // eslint-disable-next-line react/no-array-index-key
    <TableCell key={`${cell}_${i}_${j}`}>
      {cell}
    </TableCell>
  ));

  const tr = (
    // eslint-disable-next-line react/no-array-index-key
    <TableRow key={i}>
      {cells}
    </TableRow>
  );

  return tr;
});


const TableView = ({ columns, rows }) => (
  <Table className="striped very compact">
    <TableHeader>
      <TableRow>
        {columnView(columns)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rowView(rows)}
    </TableBody>
  </Table>
);

TableView.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default TableView;
