import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Adminlogin } from '../../actions/auth';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert.js';
import './auth.css';

const AdminLogin = ({ setAlert, Adminlogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    Adminlogin(email, password);
  };
  //Redirect case login
  if (isAuthenticated) {
    return <Redirect to="/users" />;
  }
  return (
    <Form className="containerauth" onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <h1 style={{ color: 'rgb(196, 62, 107)' }}>Sign In</h1>
        <p className="Register-lead">
          <i className="fas fa-user"></i> Sign Into Your Admin Account
        </p>
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
          required
        />
      </Form.Group>
      <Button
        style={{ backgroundColor: 'rgb(196, 62, 107)', border: 'none' }}
        variant="primary"
        type="submit"
        value="LogIn"
      >
        LogIn
      </Button>
    </Form>
  );
};
AdminLogin.propTypes = {
  Adminlogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, Adminlogin })(AdminLogin);
