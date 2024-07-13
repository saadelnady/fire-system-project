import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./projectActionsCreators";

export const fetchProjects = ({
  limit = "10",
  page = "",
  search = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getProjects());

    try {
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);

      // Make the GET request with the constructed query parameters
      const response = await getData(`/v1/projects/?${params.toString()}`);
      // console.log("response ====>", response);
      dispatch(actionsCreators.getProjectsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getProjectsFail(error));
    }
  };
};

/* ================================================================================================== */
export const fetchProject = (projectId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getProject(projectId));
    try {
      const response = await getData(`/v1/projects/${projectId}`);
<<<<<<< HEAD
      console.log("response", response);
=======
      // console.log("response", response);
>>>>>>> 5668ca8 (Initial commit)
      dispatch(actionsCreators.getProjectSuccess(response?.data));
    } catch (error) {
      dispatch(actionsCreators.getProjectFail(error));
    }
  };
};

/* ================================================================================================== */
export const addProject = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addProject(formData));
    try {
      const response = await postData(`/v1/projects`, formData);
      if (response?.status) {
        // console.log("response====>", response);
        dispatch(actionsCreators.addProjectSuccess(response?.data));
        showToast(toast, response?.message, "success");
      }
      console.log("reponse==>", response);
    } catch (error) {
      console.log("error", error);
      dispatch(actionsCreators.addProjectFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const editProject = (payload, toast, ownerId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editProject(payload));
    try {
      const response = await putData(`/v1/clients/${ownerId}`, payload);
      if (response?.status) {
        dispatch(actionsCreators.editProjectSuccess(response?.data));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(actionsCreators.editProjectFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const deleteProject = (projectId, toast, callBackFn) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteProject(projectId));
    try {
      const response = await deleteData(`/v1/projects/${projectId}`);
      dispatch(actionsCreators.deleteProjectSuccess(response?.data));
      showToast(toast, response?.message, "success");
      callBackFn();
    } catch (error) {
      dispatch(
        actionsCreators.deleteProjectFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const clearproject = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.clearProject());
    try {
      dispatch(actionsCreators.clearProjectSuccess());
    } catch (error) {
      dispatch(actionsCreators.clearProjectFail(error));
    }
  };
};
