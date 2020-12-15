import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { register } from '../../actions/auth';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './auth.css';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    avatar: '',

    bio: '',
    email: '',
    password: '',
    password2: '',
  });
  const {
    FirstName,
    LastName,
    avatar,
    bio,
    email,
    password,
    password2,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password not match!', 'danger');
    } else {
      register({ FirstName, LastName, avatar, bio, email, password });
    }
  };
  //Redirect case login
  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }
  return (
    <Form className="containerauth" onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <h1 style={{ color: 'rgb(196, 62, 107)' }}>Sign Up</h1>
        <p className="Register-lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your First Name"
          name="FirstName"
          value={FirstName}
          onChange={(e) => onChange(e)}
          required
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Last Name"
          name="LastName"
          value={LastName}
          onChange={(e) => onChange(e)}
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Image"
          name="avatar"
          value={avatar}
          onChange={(e) => onChange(e)}
        />
        <Form.Label>Bio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your bio"
          name="bio"
          value={bio}
          onChange={(e) => onChange(e)}
        />

        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          minLength="6"
        />
      </Form.Group>
      <Button
        style={{ backgroundColor: 'rgb(196, 62, 107)', border: 'none' }}
        variant="primary"
        type="submit"
        value="Register"
      >
        Register
      </Button>
      <p>
        Already have an account? <Link to="/login">Sing In</Link>
      </p>
    </Form>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
