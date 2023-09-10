import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
  Alert,
} from "reactstrap";
import React, { useState } from "react";
export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className="justify-content-center"
      style={{
        backgroundColor: " #66e0ff",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Navbar>
        <NavbarBrand
          href="/"
          style={{
            color: "White",
            textDecoration: "none",
            fontFamily: "Segoe Script",
          }}
        >
          earlyEateries
        </NavbarBrand>

        <Nav tabs style={{ backgroundColor: "#66e0ff " }}>
          <NavItem>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Comic Sans MS",
              }}
              href="/home"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Comic Sans MS",
                fontSize: "100%",
              }}
              href="/about"
            >
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Comic Sans MS",
              }}
              href="/contact"
            >
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
        <Button color="#66e0ff">Login</Button>
      </Navbar>
    </div>
  );
}
