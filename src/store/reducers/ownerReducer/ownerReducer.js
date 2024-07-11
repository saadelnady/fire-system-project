import {
  OWNER_ACTIONS_TYPES,
  OWNERS_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  owner: {},
  owners: [],
  ownerProjects: [],
};

const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OWNERS_ACTIONS_TYPES.GET_OWNERS:
      return { ...state, isLoading: true };

    case OWNERS_ACTIONS_TYPES.GET_OWNERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        owners: action?.payLoad,
        total: action.payLoad.total,
        error: null,
      };

    case OWNERS_ACTIONS_TYPES.GET_OWNERS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS:
      return { ...state };

    case OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS_SUCCESS:
      return {
        ...state,
        searchedOwners: action.payLoad.owners,
        total: action.payLoad.total,
        error: null,
      };

    case OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case OWNER_ACTIONS_TYPES.GET_OWNER:
      return { ...state, isLoading: true };

    case OWNER_ACTIONS_TYPES.GET_OWNER_SUCCESS:
      return {
        ...state,
        owner: action?.payLoad,
        isLoading: false,
        error: null,
      };

    case OWNER_ACTIONS_TYPES.GET_OWNER_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case OWNER_ACTIONS_TYPES.POST_OWNER:
      return { ...state, isLoading: true };

    case OWNER_ACTIONS_TYPES.POST_OWNER_SUCCESS:
      console.log("action .payload --->", action?.payLoad);
      return {
        ...state,
        isLoading: false,
        owners: [...state.owners, action?.payLoad],
      };

    case OWNER_ACTIONS_TYPES.POST_OWNER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ========================================================================
    case OWNER_ACTIONS_TYPES.PUT_OWNER:
      return { ...state, isLoading: true };

    case OWNER_ACTIONS_TYPES.PUT_OWNER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // owners: [...state.owners, action?.payLoad],
        owner: { ...state.owner, ...action?.payLoad },
        error: null,
      };

    case OWNER_ACTIONS_TYPES.PUT_OWNER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ========================================================================
    case OWNER_ACTIONS_TYPES.DELETE_OWNER:
      return { ...state, isLoading: true, error: null };

    case OWNER_ACTIONS_TYPES.DELETE_OWNER_SUCCESS:
      console.log(action?.payLoad);
      // const updatedOwners = state.owners.filter(
      //   (owner) => owner._id !== action?.payLoad?._id
      // );
      return {
        ...state,
        isLoading: false,
        error: null,
        // owners: [...updatedOwners],
      };

    case OWNER_ACTIONS_TYPES.DELETE_OWNER_FAIL:
      return { ...state, isLoading: false, error: action?.payLoad };
    // ========================================================================
    case OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS:
      return { ...state, isLoading: true, error: null };

    case OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        ownerProjects: action?.payLoad,
      };

    case OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS_FAIL:
      return { ...state, isLoading: false, error: action?.payLoad };

    // ========================================================================
    case OWNER_ACTIONS_TYPES.CLEAR_OWNER:
      return {
        ...state,
        isLoading: true,
      };
    case OWNER_ACTIONS_TYPES.CLEAR_OWNER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        owner: {},
        error: null,
      };
    case OWNER_ACTIONS_TYPES.CLEAR_OWNER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    default:
      return state;
  }
};

export { ownerReducer };
