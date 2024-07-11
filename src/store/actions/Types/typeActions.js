import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./typeActionsCreators";

export const fetchTypes = ({ limit = "10", page = "", search = "" } = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getTypes());

    try {
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);

      const response = await getData(`/v1/type?${params.toString()}`);
      // console.log("response", response);
      if (response.status) {
        dispatch(actionsCreators.getTypesSuccess(response));
      }
    } catch (error) {
      dispatch(actionsCreators.getTypesFail(error));
    }
  };
};

/* ================================================================================================== */
export const fetchType = (typeId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getType(typeId));
    try {
      const response = await getData(`/v1/type/${typeId}`);
      dispatch(actionsCreators.getTypeSuccess(response?.data));
    } catch (error) {
      dispatch(actionsCreators.getTypeFail(error));
    }
  };
};
/* ================================================================================================== */
export const addType = ({ formData, toast, dispatchTypes }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addType(formData));
    try {
      const response = await postData(`/v1/type`, formData);
      if (response?.status) {
        dispatch(actionsCreators.addTypeSuccess(response?.data));
        showToast(toast, response?.message, "success");
        dispatchTypes();
      }
    } catch (error) {
      dispatch(actionsCreators.addTypeFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const editType = (payload, toast, typeId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editType(payload));
    try {
      const response = await putData(`/v1/type/${typeId}`, payload);
      if (response?.status) {
        dispatch(actionsCreators.editTypeSuccess(response.data));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(actionsCreators.editTypeFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const deleteType = (typeId, toast, dispatchTypes) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteType(typeId));
    try {
      const response = await deleteData(`/v1/type//${typeId}`);
      dispatch(actionsCreators.deleteTypeSuccess(response?.data));
      showToast(toast, response?.message, "success");
      dispatchTypes();
    } catch (error) {
      dispatch(actionsCreators.deleteTypeFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const clearType = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.clearType());
    try {
      dispatch(actionsCreators.clearTypeSuccess());
    } catch (error) {
      dispatch(actionsCreators.clearTypeFail(error));
    }
  };
};
