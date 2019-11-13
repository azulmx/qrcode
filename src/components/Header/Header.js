import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';

import './Header.css';

class Header extends Component {
  state = {  }
  render() { 
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/dashboard">GENERADOR DE CÓDIGO QR</Nav.Link>
            <Nav.Link href="/ruleta">RULETA DE LA SUERTE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
 
export default Header;