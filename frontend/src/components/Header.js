import React from 'react';
import {Nav, Navbar, Container, Badge} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png'
export default function Header() {
  const {cartItems} = useSelector((state)=>state.cart);
  console.log(444,cartItems);
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
              {
                cartItems.length > 0 && ( <Badge pill bg="success" style={{marginLeft:'5px'}}> 
                {cartItems.reduce((a, c)=>  a + c.qty, 0)}
                
                </Badge>)
              }
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
