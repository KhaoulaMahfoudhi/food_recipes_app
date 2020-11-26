import React, { Fragment } from 'react';
import { Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <Fragment>
      <div className="AboutContainer">
        <h1 className="x-largeA">About So YummY Recipes</h1>
        <Col xs={4} md={4}>
          <Image className="img" src="yummy.jpg" roundedCircle />
        </Col>
        <h1 className="largeA">Hello and welcome to Simply Recipes!</h1>
        <p className="About-lead">
          If you are new to Simply Recipes, the one thing you should know about
          us <br />
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

export default About;
