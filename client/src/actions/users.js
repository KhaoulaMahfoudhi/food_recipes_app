import axios from 'axios';
import { setAlert } from './alert';
import { GET_USERS, DELETE_USER, POST_ERROR } from './types';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/showUsers');
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/deleteUser/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
    dispatch(setAlert('User Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
