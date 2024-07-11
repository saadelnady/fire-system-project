import { getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper.js";
import * as actionCreators from "./userActionsCreators";
// ========================================================================================

export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getUserProfile());
    try {
      const response = await getData(`/v1/users/profile`);
      if (response?.status) {
        dispatch(actionCreators.getUserProfileSuccess(response?.data));
      }
    } catch (error) {
      dispatch(actionCreators.getUserProfileFail(error));
    }
  };
};
// ========================================================================================

export const userLogin = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogin(values));
    try {
      const response = await postData(`/v1/auth/signin`, values);
      if (response.status) {
        localStorage.setItem("TOKEN", response?.token);
        dispatch(actionCreators.postUserLoginSuccess(response?.data));
        showToast(toast, "logged in successfully", "success");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      dispatch(actionCreators.postUserLoginFail(error));
      showToast(toast, "user name or password is not correct", "error");
    }
  };
};
// ========================================================================================
export const checkUserLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      dispatch({ type: "LOGIN_SUCCESS" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };
};

// ========================================================================================

export const userLogout = ({ toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postUserLogout());
    try {
      dispatch(actionCreators.postUserLogoutSuccess());
      localStorage.removeItem("TOKEN");
      showToast(toast, "You have logged out successfully", "success");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postUserLogoutFail());
      showToast(toast, "Something wrong when logout", "error");
    }
  };
};

// ========================================================================================
export const editUserProfile = (values, toast) => {
  return async (dispatch) => {
    dispatch(actionCreators.putUserProfile());
    try {
      const response = await putData(`/v1/users`, values);
      if (response?.status) {
        dispatch(actionCreators.putUserProfileSuccess(response?.data));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      console.log(error);
      dispatch(actionCreators.putUserProfileFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================
