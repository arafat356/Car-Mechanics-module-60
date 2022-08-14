import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="text-info" href="#home">
            Car Genius
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-success p-4" to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              className="text-success p-4"
              to="/home#services"
            >
              Services
            </Nav.Link>
            <Nav.Link as={Link} className="text-success p-4" to="/home#experts">
              Experts
            </Nav.Link>

            {/* here's condition  */}
            {user?.email ? (
              <Button onClick={logOut} variant="info">
                Log Out
              </Button>
            ) : (
              <Nav.Link as={Link} className="text-primary p-4" to="/login">
                Login
              </Nav.Link>
            )}

            {/* end  */}
            <Navbar.Text>
              Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
