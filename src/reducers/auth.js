import {AUTH_SUCCESS} from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  steamid: null,
  username: 'test'
};

function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };

    default:
      return state
  }
}

export default auth;