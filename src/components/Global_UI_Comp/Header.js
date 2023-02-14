import { React, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <Navbar
        onBlur={() => setExpanded(false)}
        expand="lg"
        fixed="top"
        bg="light"
        expanded={expanded}
      >
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              to="/portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
