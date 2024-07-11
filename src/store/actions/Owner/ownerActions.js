import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./ownerActionsCreators";

export const fetchOwners = ({ limit = "10", page = "", search = "" } = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getOwners());

    try {
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);

      // Make the GET request with the constructed query parameters
      const response = await getData(`/v1/clients?${params.toString()}`);

      dispatch(actionsCreators.getOwnersSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getOwnersFail(error));
    }
  };
};

/* ================================================================================================== */
export const fetchOwner = (ownerId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getOwner(ownerId));
    try {
      const response = await getData(`/v1/clients/${ownerId}`);
      dispatch(actionsCreators.getOwnerSuccess(response?.data));
    } catch (error) {
      dispatch(actionsCreators.getOwnerFail(error));
    }
  };
};
/* ================================================================================================== */
export const fetchOwnerProjects = ({
  limit = "10",
  page = "",
  search = "",
  ownerId,
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getOwnerProjects(ownerId));
    try {
      console.log("ownerId ===>", ownerId);
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);

      const response = await getData(
        `/v1/projects/client/${ownerId}?${params.toString()}`
      );
      dispatch(actionsCreators.getOwnerProjectsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getOwnerProjectsFail(error));
    }
  };
};
/* ================================================================================================== */
export const addOwner = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addOwner(formData));
    try {
      const response = await postData(`/v1/clients`, formData);
      if (response?.status) {
        dispatch(actionsCreators.addOwnerSuccess(response?.data));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      console.log(error);
      dispatch(actionsCreators.addOwnerFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const editOwner = (payload, toast, ownerId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editOwner(payload));
    try {
      const response = await putData(`/v1/clients/${ownerId}`, payload);
      console.log("edit", response?.data);
      if (response?.status) {
        dispatch(actionsCreators.editOwnerSuccess(response?.data));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      console.log(error);
      dispatch(actionsCreators.editOwnerFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const deleteOwner = (ownerId, toast, callBackFn) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteOwner(ownerId));
    try {
      const response = await deleteData(`/v1/clients/${ownerId}`);
      console.log("response ===?", response);
      dispatch(actionsCreators.deleteOwnerSuccess(response?.data));
      showToast(toast, response?.message, "success");
      callBackFn();
    } catch (error) {
      dispatch(actionsCreators.deleteOwnerFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const clearOwner = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.clearOwner());
    try {
      dispatch(actionsCreators.clearOwnerSuccess());
    } catch (error) {
      dispatch(actionsCreators.clearOwnerFail(error));
    }
  };
};
