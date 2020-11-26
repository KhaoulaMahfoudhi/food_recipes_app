import React, { Fragment } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
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
              <Link to="login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
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
    </Fragment>
  );
};

export default Landing;
