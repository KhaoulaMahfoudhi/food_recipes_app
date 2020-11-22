import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Form className="container" onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <h1 style={{ color: 'rgb(196, 62, 107)' }}>Sign In</h1>
        <p className="Register-lead">
          <i className="fas fa-user"></i> Sign Into Your Account
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
      <p>
        not registered yet ? <Link to="/register">Register </Link>
      </p>
    </Form>
  );
};

export default Login;
