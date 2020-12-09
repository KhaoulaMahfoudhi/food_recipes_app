import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const About = ({ auth: { isAuthenticated, loading } }) => {
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
            <span>Khaoula</span>
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
      <div className="AboutContainer">
        <div>
          <h1 className="largeA">Hello and welcome to So YummY !</h1>
          <p className="About-lead">
            If you are new to So YummY, the one thing you should know about us{' '}
            <br />
            is that we are obsessed with creating scratch{' '}
            <span style={{ color: 'rgb(215, 18, 124)' }}>sweet</span> recipes
            that you will love.
            <br />
            Our goal is to encourage people to cook at home, and to make the
            process <br />
            of feeding your family and loved ones less intimidating and more
            enjoyable.
          </p>
          <h1 className="largeA">Meet Our Chef</h1>
        </div>
        <div className="boxAbout">
          <div className="cardAbout">
            <div className="imgBxAbout">
              <img
                src="https://cdn.shortpixel.ai/spai/w_761+q_+ret_img+to_webp/https://www.tilda.com/professionals/wp-content/uploads/sites/2/2016/09/Steve-Munkley-Royal-Garden-638x967.jpg"
                alt="images"
              />
            </div>
            <div className="details">
              <h2>
                Johen Doe
                <br />
                <span>Always cook with passion</span>
                <ul>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.facebook.com" target="_blank">
                      {' '}
                      <i
                        className="fab fa-facebook"
                        style={{ color: ' rgb(73, 78, 83)' }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.instagram.com" target="_blank">
                      {' '}
                      <i
                        className="fab fa-instagram"
                        style={{ color: 'rgb(73, 78, 83)' }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.snapchat.com" target="_blank">
                      <i
                        className="fab fa-snapchat"
                        style={{ color: ' rgb(73, 78, 83)' }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.linkedin.com" target="_blank">
                      {' '}
                      <i
                        className="fab fa-linkedin"
                        style={{ color: ' rgb(73, 78, 83)' }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {!loading && (
        <Fragment>{isAuthenticated ? authFooter : guestFooter}</Fragment>
      )}
    </Fragment>
  );
};
About.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(About);
