import { PROJECTS_ACTIONS_TYPES, PROJECT_ACTIONS_TYPES } from "../actionTypes";

export const getProjects = (payLoad) => {
  return {
    type: PROJECTS_ACTIONS_TYPES.GET_PROJECTS,
    payLoad,
  };
};
export const getProjectsSuccess = (payLoad) => {
  return {
    type: PROJECTS_ACTIONS_TYPES.GET_PROJECTS_SUCCESS,
    payLoad,
  };
};
export const getProjectsFail = (payLoad) => {
  return {
    type: PROJECTS_ACTIONS_TYPES.GET_PROJECTS_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const getProject = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.GET_PROJECT,
    payLoad,
  };
};

export const getProjectSuccess = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.GET_PROJECT_SUCCESS,
    payLoad,
  };
};

export const getProjectFail = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.GET_PROJECT_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const addProject = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.POST_PROJECT,
    payLoad,
  };
};

export const addProjectSuccess = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.POST_PROJECT_SUCCESS,
    payLoad,
  };
};

export const addProjectFail = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.POST_PROJECT_FAIL,
    payLoad,
  };
};
// ========================================================================

export const editProject = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.PUT_PROJECT,
    payLoad,
  };
};
export const editProjectSuccess = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.PUT_PROJECT_SUCCESS,
    payLoad,
  };
};
export const editProjectFail = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.PUT_PROJECT_FAIL,
    payLoad,
  };
};

// ========================================================================
export const deleteProject = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.DELETE_PROJECT,
    payLoad,
  };
};
export const deleteProjectSuccess = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.DELETE_PROJECT_SUCCESS,
    payLoad,
  };
};
export const deleteProjectFail = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.DELETE_PROJECT_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const clearProject = () => {
  return {
    type: PROJECT_ACTIONS_TYPES.CLEAR_PROJECT,
  };
};
export const clearProjectSuccess = () => {
  return {
    type: PROJECT_ACTIONS_TYPES.CLEAR_PROJECT_SUCCESS,
  };
};
export const clearProjectFail = (payLoad) => {
  return {
    type: PROJECT_ACTIONS_TYPES.CLEAR_PROJECT_FAIL,
    payLoad,
  };
};
