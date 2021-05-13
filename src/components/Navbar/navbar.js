import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">Sign In</Nav.Link>
        </Nav.Item>
      </Nav>
  );
}

export default Navbar;