import { OWNER_ACTIONS_TYPES, OWNERS_ACTIONS_TYPES } from "../actionTypes";

export const getOwners = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_OWNERS,
    payLoad,
  };
};
export const getOwnersSuccess = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_OWNERS_SUCCESS,
    payLoad,
  };
};
export const getOwnersFail = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_OWNERS_FAIL,
    payLoad,
  };
};

// ==================================================================================

export const getOwnerProjects = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS,
    payLoad,
  };
};
export const getOwnerProjectsSuccess = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS_SUCCESS,
    payLoad,
  };
};
export const getOwnerProjectsFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER_PROJECTS_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const getSearchedOwners = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS,
    payLoad,
  };
};
export const getSearchedOwnersSuccess = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS_SUCCESS,
    payLoad,
  };
};
export const getSearchedOwnersFail = (payLoad) => {
  return {
    type: OWNERS_ACTIONS_TYPES.GET_SEARCHED_OWNERS_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const getOwner = () => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER,
  };
};

export const getOwnerSuccess = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER_SUCCESS,
    payLoad,
  };
};

export const getOwnerFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.GET_OWNER_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const addOwner = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.POST_OWNER,
    payLoad,
  };
};

export const addOwnerSuccess = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.POST_OWNER_SUCCESS,
    payLoad,
  };
};

export const addOwnerFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.POST_OWNER_FAIL,
    payLoad,
  };
};
// ========================================================================

export const editOwner = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.PUT_OWNER,
    payLoad,
  };
};
export const editOwnerSuccess = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.PUT_OWNER_SUCCESS,
    payLoad,
  };
};
export const editOwnerFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.PUT_OWNER_FAIL,
    payLoad,
  };
};

// ========================================================================
export const deleteOwner = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.DELETE_OWNER,
    payLoad,
  };
};
export const deleteOwnerSuccess = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.DELETE_OWNER_SUCCESS,
    payLoad,
  };
};
export const deleteOwnerFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.DELETE_OWNER_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const clearOwner = () => {
  return {
    type: OWNER_ACTIONS_TYPES.CLEAR_OWNER,
  };
};
export const clearOwnerSuccess = () => {
  return {
    type: OWNER_ACTIONS_TYPES.CLEAR_OWNER_SUCCESS,
  };
};
export const clearOwnerFail = (payLoad) => {
  return {
    type: OWNER_ACTIONS_TYPES.CLEAR_OWNER_FAIL,
    payLoad,
  };
};
