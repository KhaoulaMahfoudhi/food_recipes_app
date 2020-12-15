import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  ADMIN_LOAD,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_ADMIN_SUCCESS,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isAdmin: null,
  loading: true,
  user: null,
  admin: null,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOAD:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: false,
        loading: false,
        user: payload,
      };
    case ADMIN_LOAD:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: true,
        loading: false,
        admin: payload,
      };
    case LOGIN_ADMIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isAdmin: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isAdmin: false,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
      };
    default:
      return state;
  }
}
