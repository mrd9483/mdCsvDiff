import React from 'react';
import ViewTable from '../Components/View/ViewTable';
import OpenTable from '../Components/View/OpenTable';

import { Columns, Rows } from '../utilities/fakeStuff';

const View = function (props) {
  return (
    <div>
      <ViewTable rows={Rows} columns={Columns} />
      <OpenTable />
    </div>
  );
};

export default View;
