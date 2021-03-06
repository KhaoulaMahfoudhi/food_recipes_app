import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  ADMIN_LOAD,
  LOGIN_ADMIN_SUCCESS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ADMIN_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';

//load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/login/');
    dispatch({
      type: USER_LOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
//Register User
export const register = ({
  FirstName,
  LastName,
  avatar,
  bio,
  email,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    FirstName,
    LastName,
    avatar,
    bio,
    email,
    password,
  });

  try {
    const res = await axios.post('/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert('Bad credential', 'danger'));
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

//Admin

//load Admin
export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/');
    dispatch({
      type: ADMIN_LOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ADMIN_ERROR,
    });
  }
};

//Login
export const Adminlogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/Adminlogin', body, config);
    dispatch({
      type: LOGIN_ADMIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert('Bad credential', 'danger'));
  }
};
//LOGOUT
export const Adminlogout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
