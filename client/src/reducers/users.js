import { GET_USERS, DELETE_USER, POST_ERROR } from '../actions/types';
const initialState = {
  users: [],
  user: null,
  loading: true,
  error: {},
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
