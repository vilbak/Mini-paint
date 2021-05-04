import * as actionTypes from '../actions/actionTypes';

const initialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false,
  authenticated: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        idToken: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        authenticated: true,
      };
    case  actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        authenticated: false,
      };
    case  actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case  actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        idToken: null,
        userId: null,
        authenticated: false,
      };
    case  actionTypes.AUTH:
      return {
        ...state,
        error: null,
        loading: true,

      };
    default:
      return state;
  }
};

export default authReducer;
