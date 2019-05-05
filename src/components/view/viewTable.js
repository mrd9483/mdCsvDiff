import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 10px 6px;
  background-color: #A5B0FF;
  border-top: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 64px;
`;

const TableCell = styled.td`
  border: 1px solid #e2e3e3;
  padding: 3px 6px;
  margin: 0px;

  :first-child {
    border-left: 0px;
  }
  :last-child {
    border-right: 0px;
  }
`;

const TableRow = styled.tr`
  :nth-child(even) {
    background: #f6f6ff;
  }
`;

const columnView = columns => columns.map(col => (
  <TableHeaderCell key={col}>
    {col}
  </TableHeaderCell>
));

const rowView = rows => rows.map((row, i) => {
  const cells = row.map(cell => (
    <TableCell key={cell}>
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
  <Table>
    <thead>
      <tr>
        {columnView(columns)}
      </tr>
    </thead>
    <tbody>
      {rowView(rows)}
    </tbody>
  </Table>
);

TableView.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default TableView;
