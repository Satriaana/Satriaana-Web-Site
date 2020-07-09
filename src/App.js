//import React from 'react';
//import logo from "./logo.svg";
//import "./App.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const App = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="App">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Satriaana
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://fossnsbm.org">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://forum.fossnsbm.org">Forum</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/donations">Donations</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default App;
