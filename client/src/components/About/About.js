import React from 'react';
import { Image, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="AboutContainer">
      <h1 className="x-largeA">About So YummY Recipes</h1>
      <Col xs={4} md={4}>
        <Image className="img" src="yummy.jpg" roundedCircle />
      </Col>
      <h1 className="largeA">Hello and welcome to Simply Recipes!</h1>
      <p className="About-lead">
        If you are new to Simply Recipes, the one thing you should know about us{' '}
        <br />
        is that we are obsessed with creating scratch sweet recipes that you
        will love.
        <br />
        Our goal is to encourage people to cook at home, and to make the process{' '}
        <br />
        of feeding your family and loved ones less intimidating and more
        enjoyable.
      </p>
      <h1 className="largeA">Meet Our Chefs</h1>
    </div>
  );
};

export default About;
