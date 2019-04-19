import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  header: {
    textAlign: 'left'
  },
  row: {
    border: '1px solid #ccd',
    padding: '3px 6px',
    margin: '0px'
  },
  even: {
    background: '#eee'
  }
};

const columnView = columns => columns.map(col => (
  <th style={Object.assign({}, styles.row, styles.header)}>
    {col}
  </th>
));

const rowView = rows => rows.map((row, i) => (
  <tr>
    {row.map(cell => (
      <td style={Object.assign({}, styles.row, (i % 2 === 1 ? styles.even : {}))}>{cell}</td>
    ))
    }
  </tr>
));

const TableView = function ({ columns, rows }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {columnView(columns)}
        </tr>
      </thead>
      <tbody>
        {rowView(rows)}
      </tbody>
    </table>
  );
};

TableView.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
};

export default TableView;
