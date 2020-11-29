import React, { Fragment } from 'react';
import { Image, Col, Card, Button } from 'react-bootstrap';
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
      <div className="AboutContainer">
        <div>
          <h1 className="x-largeA">About So YummY Recipes</h1>
          <Col xs={4} md={4}>
            <Image className="img" src="yummy.jpg" roundedCircle />
          </Col>
          <h1 className="largeA">Hello and welcome to Simply Recipes!</h1>
          <p className="About-lead">
            If you are new to Simply Recipes, the one thing you should know
            about us <br />
            is that we are obsessed with creating scratch sweet recipes that you
            will love.
            <br />
            Our goal is to encourage people to cook at home, and to make the
            process <br />
            of feeding your family and loved ones less intimidating and more
            enjoyable.
          </p>
          <h1 className="largeA">Meet Our Chefs</h1>
        </div>
        <div>
          <div className="cardChef">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://www.ecpi.edu/sites/default/files/CIV%20Sept%2026.png"
              />
              <Card.Body>
                <Card.Title>Khaoula Mahfoudhi</Card.Title>
                <Card.Text>
                  "Cooking is about passion, so it may look slightly
                  temperamental in a way that it's too assertive to the naked
                  eye."
                </Card.Text>

                <a
                  href="https://www.facebook.com/profile.php?id=100009064632821"
                  target="_blank"
                >
                  <Button className="icon" variant="secondary">
                    <i className="fab fa-facebook"></i>
                  </Button>{' '}
                </a>

                <a
                  href="https://www.instagram.com/khaoula_mahfoudhi/"
                  target="_blank"
                >
                  <Button className="icon" variant="secondary">
                    <i className="fab fa-instagram"></i>
                  </Button>{' '}
                </a>

                <a
                  href="https://www.linkedin.com/in/khaoula-mahfoudhi-53a489117/"
                  target="_blank"
                >
                  <Button className="icon " variant="secondary">
                    <i className="fab fa-linkedin"></i>
                  </Button>{' '}
                </a>

                <a href="https://twitter.com" target="_blank">
                  <Button className="icon" variant="secondary">
                    <i className="fab fa-twitter"></i>
                  </Button>{' '}
                </a>
              </Card.Body>
            </Card>
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
