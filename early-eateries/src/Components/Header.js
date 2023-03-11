import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Alert,
} from "reactstrap";

import React, { useState } from "react";
export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="justify-content-center" style={{ backgroundColor: "" }}>
      <Navbar>
        <NavbarBrand href="/">earlyEateries</NavbarBrand>

        <Nav tabs style={{ backgroundColor: "white" }}>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Login</NavbarText>
      </Navbar>
    </div>
  );
}
