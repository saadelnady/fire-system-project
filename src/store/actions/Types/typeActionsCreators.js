import { TYPE_ACTIONS_TYPES, TYPES_ACTIONS_TYPES } from "../actionTypes";

export const getTypes = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_TYPES,
    payLoad,
  };
};
export const getTypesSuccess = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_TYPES_SUCCESS,
    payLoad,
  };
};
export const getTypesFail = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_TYPES_FAIL,
    payLoad,
  };
};

// ==================================================================================
export const getSearchedTypes = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_SEARCHED_TYPES,
    payLoad,
  };
};
export const getSearchedTypesSuccess = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_SEARCHED_TYPES_SUCCESS,
    payLoad,
  };
};
export const getSearchedTypesFail = (payLoad) => {
  return {
    type: TYPES_ACTIONS_TYPES.GET_SEARCHED_TYPES_FAIL,
    payLoad,
  };
};

// ==================================================================================
// export const getSellerProducts = (payLoad) => {
//   return {
//     type: PRODUCTS_ACTIONS_TYPES.GET_SELLER_PRODUCTS,
//     payLoad,
//   };
// };
// export const getSellerProductsSuccess = (payLoad) => {
//   return {
//     type: PRODUCTS_ACTIONS_TYPES.GET_SELLER_PRODUCTS_SUCCESS,
//     payLoad,
//   };
// };
// export const getSellerProductsFail = (payLoad) => {
//   return {
//     type: PRODUCTS_ACTIONS_TYPES.GET_SELLER_PRODUCTS_FAIL,
//     payLoad,
//   };
// };

// ==================================================================================
export const getType = () => {
  return {
    type: TYPE_ACTIONS_TYPES.GET_TYPE,
  };
};

export const getTypeSuccess = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.GET_TYPE_SUCCESS,
    payLoad,
  };
};

export const getTypeFail = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.GET_TYPE_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const addType = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.POST_TYPE,
    payLoad,
  };
};

export const addTypeSuccess = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.POST_TYPE_SUCCESS,
    payLoad,
  };
};

export const addTypeFail = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.POST_TYPE_FAIL,
    payLoad,
  };
};
// ========================================================================

export const editType = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.PUT_TYPE,
    payLoad,
  };
};
export const editTypeSuccess = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.PUT_TYPE_SUCCESS,
    payLoad,
  };
};
export const editTypeFail = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.PUT_TYPE_FAIL,
    payLoad,
  };
};

// ========================================================================
export const deleteType = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.DELETE_TYPE,
    payLoad,
  };
};
export const deleteTypeSuccess = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.DELETE_TYPE_SUCCESS,
    payLoad,
  };
};
export const deleteTypeFail = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.DELETE_TYPE_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const clearType = () => {
  return {
    type: TYPE_ACTIONS_TYPES.CLEAR_TYPE,
  };
};
export const clearTypeSuccess = () => {
  return {
    type: TYPE_ACTIONS_TYPES.CLEAR_TYPE_SUCCESS,
  };
};
export const clearTypeFail = (payLoad) => {
  return {
    type: TYPE_ACTIONS_TYPES.CLEAR_TYPE_FAIL,
    payLoad,
  };
};
