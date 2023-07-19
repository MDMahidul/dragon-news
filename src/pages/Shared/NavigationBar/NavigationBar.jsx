import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
        const { user } = useContext(AuthContext);
    return (
      <Container className="mb-5">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-secondary-subtle"
          variant="light"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto gap-3 ">
                <Link
                  className="text-secondary fw-bold text-decoration-none"
                  to="/category/0"
                >
                  Home
                </Link>

                <Link
                  className="text-secondary fw-bold text-decoration-none"
                  href="#pricing"
                >
                  About
                </Link>
                <Link
                  href="#pricing"
                  className="text-secondary fw-bold text-decoration-none"
                >
                  Career
                </Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;