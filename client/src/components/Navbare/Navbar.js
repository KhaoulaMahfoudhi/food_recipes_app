import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Navbar.css';

const NavBare = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav className="mr-auto">
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/posts">
        Recipes
      </Link>
      <Link className="link" onClick={logout} to="">
        {' '}
        <i className="fas fa-sign-out-alt"></i> Logout
      </Link>
    </Nav>
  );
  const guestLinks = (
    <Nav className="mr-auto">
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/register">
        Register
      </Link>
      <Link className="link" to="/login">
        Login
      </Link>
    </Nav>
  );

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
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Navbar>
    </div>
  );
};
NavBare.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBare);
