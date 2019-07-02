import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Logo = styled.img`
  margin: auto; 
`;

function Nav() {
  return (
    <Menu className="menu ui inverted fixed">
      <div className="item">
        <Logo className="ui center mini circular image" alt="logo" src={`${process.env.PUBLIC_URL}/images/mat.jpg`} />
      </div>
      <Link className="item" to="/view">
        <i className="block file icon" />
        View
      </Link>
      <Link className="item" to="/diff">
        <i className="block columns icon" />
        Diff
      </Link>
      <Link className="item" to="/aggregate">
        <i className="block toilet paper icon" />
        Aggregate
      </Link>
    </Menu>
  );
}

export default Nav;
