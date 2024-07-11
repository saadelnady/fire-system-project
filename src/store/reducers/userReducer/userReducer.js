import { USER_ACTIONS_TYPES } from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.GET_USER_PROFILE:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action?.payLoad,
        error: null,
      };

    case USER_ACTIONS_TYPES.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payLoad,
      };

    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: {},
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case USER_ACTIONS_TYPES.PUT_USER_PROFILE:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.PUT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action?.payLoad,
      };

    case USER_ACTIONS_TYPES.PUT_USER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================

    default:
      return state;
  }
};

export { userReducer };
