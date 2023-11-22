import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import image from "../assets/images/logo.png";
import {Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg ms-auto" className="d-flex ms-auto bg-light text-dark ">
      <Container>
      <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/"}>
        <img src={image} alt="logo"></img>
        </Link>
        <Navbar.Brand className ={"text-dark"} href="#home">About</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className ={"text-dark"} href="#home">ContactUs</Nav.Link>
            <Nav.Link  className ={"text-dark"} href="#link">Timetable</Nav.Link>
            <Nav.Link  className ={"text-dark"} href="#link">Live location</Nav.Link>
            <Button  variant="danger" as="input" type="submit" value="Sign in" />{' '}
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default Header;