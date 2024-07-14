import {
  PROJECTS_ACTIONS_TYPES,
  PROJECT_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  project: {},
  projects: [],
  total_pages: 0,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    // ====================================================================================================
    case PROJECTS_ACTIONS_TYPES.GET_PROJECTS:
      return { ...state, isLoading: true };

    case PROJECTS_ACTIONS_TYPES.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: action?.payLoad?.list,
        total_pages: action?.payLoad?.total_pages,
      };

    case PROJECTS_ACTIONS_TYPES.GET_PROJECTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case PROJECT_ACTIONS_TYPES.GET_PROJECT:
      return { ...state, isLoading: true };

    case PROJECT_ACTIONS_TYPES.GET_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        project: action?.payLoad,
        error: null,
      };

    case PROJECT_ACTIONS_TYPES.GET_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };

    // ====================================================================================================
    case PROJECT_ACTIONS_TYPES.PUT_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECT_ACTIONS_TYPES.PUT_PROJECT_SUCCESS:
      const updatedProjects = state.projects?.filter(
        (project) => project?._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        projects: [...updatedProjects, action?.payLoad],
        project: action.payLoad,
        error: null,
      };
    case PROJECT_ACTIONS_TYPES.PUT_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case PROJECT_ACTIONS_TYPES.DELETE_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECT_ACTIONS_TYPES.DELETE_PROJECT_SUCCESS:
      const filteredProjects = state.projects.filter(
        (project) => project?._id !== action?.payLoad?._id
      );
      return {
        ...state,
        isLoading: false,
        projects: [...filteredProjects],
        error: null,
      };
    case PROJECT_ACTIONS_TYPES.DELETE_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case PROJECT_ACTIONS_TYPES.POST_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECT_ACTIONS_TYPES.POST_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: [...state.projects, action.payLoad],
        error: null,
      };
    case PROJECT_ACTIONS_TYPES.POST_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case PROJECT_ACTIONS_TYPES.CLEAR_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECT_ACTIONS_TYPES.CLEAR_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        project: {},
      };
    case PROJECT_ACTIONS_TYPES.CLEAR_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action?.payLoad,
      };

    default:
      return state;
  }
};

export { projectReducer };
