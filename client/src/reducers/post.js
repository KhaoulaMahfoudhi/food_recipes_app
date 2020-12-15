import {
  GET_POSTS,
  GET_POSTS_ADMIN,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_POST,
  EDIT_COMMENT,
} from '../actions/types';
const initialState = {
  recipes: [],
  recipe: null,
  loading: true,
  error: {},
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
    case GET_POSTS_ADMIN:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        recipe: payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        recipes: [...state.recipes, payload],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe._id !== payload),
        loading: false,
      };
    case EDIT_POST:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe._id === payload.postId ? { ...recipe, post: payload } : recipe
        ),
        loading: false,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe._id === payload.postId
            ? { ...recipe, comments: payload }
            : recipe
        ),
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe._id === payload.postId
            ? { ...recipe, likes: payload.likes }
            : recipe
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        recipe: { ...state.recipe, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          comments: state.recipe.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
