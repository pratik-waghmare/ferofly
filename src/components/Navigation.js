import { Button, Navbar, Nav } from "react-bootstrap";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar
        collapseOnSelect
        className="center"
        expand="lg"
        variant="dark"
        style={{ flexDirection: "row-reverse" }}
      >
        <Button
          variant="outline-light"
          bg="#000"
          style={{ borderRadius: "0px", transition: "0.3s ease-in-out" }}
        >
          Book a Room
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#top">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#rooms">ROOMS</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#gallery">GALLERY</Nav.Link>
            <Nav.Link href="#things_to_do">SEE & DO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
