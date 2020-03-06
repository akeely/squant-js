import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link';

class SquantNav extends React.Component {

  render() {

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>SQU❄NT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/bets">My Bets</Nav.Link>
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SquantNav;