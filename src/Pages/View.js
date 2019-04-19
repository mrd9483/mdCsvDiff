import React from 'react';
import ViewTable from '../Components/View/ViewTable';

import { Columns, Rows } from '../utilities/fakeStuff';

const View = function (props) {
  return (
    <ViewTable rows={Rows} columns={Columns} />
  );
};

export default View;
