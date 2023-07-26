import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand >
          <img src={logo} alt="proshop"/>
          ProShop
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-collapse-nav"></Navbar.Collapse>
          <Nav className="ms-auto">
          <LinkContainer to="/cart">
            <Nav.Link >
              <FaShoppingCart /> Cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link >
              <FaUser /> Sign in
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
