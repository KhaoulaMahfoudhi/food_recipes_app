import React, { Fragment } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ auth: { isAuthenticated, loading } }) => {
  const authFooter = (
    <footer className="main-footer">
      <div className="section__inner">
        <i className="fas fa-cookie-bite"></i>{' '}
        <Link className="linkFooter" to="/">
          <span> So YummY </span>
        </Link>
        <p>
          ©2018-2020 SO YummY, by{' '}
          <Link className="linkFooter" to="/about">
            <span> Khaoula </span>
          </Link>
        </p>
        <div className="link-to">
          <Link className="linkFooter" to="/about">
            about
          </Link>{' '}
          |{' '}
          <Link className="linkFooter" to="/posts">
            recipes
          </Link>
        </div>
      </div>
    </footer>
  );
  const guestFooter = (
    <footer className="main-footer">
      <div className="section__inner">
        <i className="fas fa-cookie-bite"></i>{' '}
        <Link className="linkFooter" to="/">
          <span> So YummY </span>
        </Link>
        <p>
          ©2018-2020 SO YummY, by{' '}
          <Link className="linkFooter" to="/about">
            <span> Khaoula </span>
          </Link>
        </p>
        <div className="link-to">
          <Link className="linkFooter" to="/about">
            about
          </Link>{' '}
          |{' '}
          <Link className="linkFooter" to="/register">
            register
          </Link>{' '}
          |{' '}
          <Link className="linkFooter" to="/login">
            login
          </Link>
        </div>
      </div>
    </footer>
  );
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">So YummY !</h1>
            <p className="lead">
              So YummY has everything you need to improve life in the kitchen,
              share recipes and get help from other chef !
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-signUp">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      {!loading && (
        <Fragment>{isAuthenticated ? authFooter : guestFooter}</Fragment>
      )}
    </Fragment>
  );
};
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
