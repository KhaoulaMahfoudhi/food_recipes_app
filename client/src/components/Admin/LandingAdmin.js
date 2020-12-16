import React, { Fragment, useEffect } from 'react';
import './LandingAdmin.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAdmin } from '../../actions/auth';
import store from '../../store/store';

const Landing = () => {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Fragment>
      <div className="landingAdmin">
        <div className="dark-overlayAdmin">
          <div className="landing-innerAdmin">
            <h1 className="x-large">Admin Area!</h1>
            <p className="lead">
              Hello this is the Admin Area, to manage better your application!
            </p>
            <div className="buttons">
              <Link to="/users" className="btn btn-signUp">
                Users
              </Link>
              <Link to="/showPosts" className="btn btn-light">
                Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footerAdmin">
        <div className="section__innerAdmin">
          <i className="fas fa-cookie-bite"></i> <span> So YummY </span>
          <p>
            ©2018-2020 SO YummY, by <span> Khaoula </span>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};
export default connect(null)(Landing);
