import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBare = ({ isAuth, login, logout }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          {' '}
          <i className="fas fa-cookie-bite"></i>{' '}
          <Link to="/">
            <span> So YummY </span>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </Nav>
        {/* <Form inline>
          <Button
            className="button"
            onClick={isAuth ? logout : login}
            variant="primary"
          >
            {isAuth ? 'Logout' : 'Login'}
          </Button>
        </Form> */}
      </Navbar>
    </div>
  );
};

export default NavBare;
