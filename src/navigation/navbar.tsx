import * as React from "react";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Item: React.SFC<{ url?: string, label: string }> = ({ url, label }) => {
  const to = url ? url : label;
  return (
    <LinkContainer to={to} exact={true}>
      <NavItem>
        {label}
      </NavItem>
    </LinkContainer>
  );
};

const AppNavBar: React.SFC<{}> = () => (
  <Navbar>
    <Nav>
      <Item label='Films' />
    </Nav>
  </Navbar>
);

export default AppNavBar;