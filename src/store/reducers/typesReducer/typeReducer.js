import {
  TYPES_ACTIONS_TYPES,
  TYPE_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  type: {},
  types: [],
  total_pages: 0,
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES_ACTIONS_TYPES.GET_TYPES:
      return { ...state, isLoading: true };
    case TYPES_ACTIONS_TYPES.GET_TYPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        types: action?.payLoad?.list,
        total_pages: action?.payLoad?.total_pages,
        error: null,
      };

    case TYPES_ACTIONS_TYPES.GET_TYPES_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case TYPE_ACTIONS_TYPES.GET_TYPE:
      return { ...state, isLoading: true };

    case TYPE_ACTIONS_TYPES.GET_TYPE_SUCCESS:
      return {
        ...state,
        type: action?.payLoad,
        isLoading: false,
        error: null,
      };

    case TYPE_ACTIONS_TYPES.GET_TYPE_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case TYPE_ACTIONS_TYPES.POST_TYPE:
      return { ...state, isLoading: true };

    case TYPE_ACTIONS_TYPES.POST_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // types: [...state.types, action?.payLoad],
        types: [...state.types],
      };

    case TYPE_ACTIONS_TYPES.POST_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "error",
      };
    // ========================================================================
    case TYPE_ACTIONS_TYPES.PUT_TYPE:
      return { ...state, isLoading: true };

    case TYPE_ACTIONS_TYPES.PUT_TYPE_SUCCESS:
      const filteredTypes = state.types?.filter(
        (type) => type?._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        types: [...filteredTypes, action?.payLoad],
        type: action.payLoad,
        error: null,
      };

    case TYPE_ACTIONS_TYPES.PUT_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "error",
        message: action.payLoad,
      };
    // ========================================================================
    case TYPE_ACTIONS_TYPES.DELETE_TYPE:
      return { ...state, isLoading: true, error: null };

    case TYPE_ACTIONS_TYPES.DELETE_TYPE_SUCCESS:
      const updatedOwners = state.types.filter(
        (type) => type._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        error: null,
        // types: [...updatedOwners],
      };

    case TYPE_ACTIONS_TYPES.DELETE_TYPE_FAIL:
      return { ...state, isLoading: false, error: action?.payLoad };

    // ========================================================================
    case TYPE_ACTIONS_TYPES.CLEAR_TYPE:
      return {
        ...state,
        isLoading: true,
      };
    case TYPE_ACTIONS_TYPES.CLEAR_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: {},
        error: null,
      };
    case TYPE_ACTIONS_TYPES.CLEAR_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    default:
      return state;
  }
};

export { typeReducer };
