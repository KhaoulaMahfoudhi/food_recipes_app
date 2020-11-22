import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
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
  );
};

export default Landing;
