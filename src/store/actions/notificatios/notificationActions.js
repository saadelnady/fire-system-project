import { getData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./notificationActionsCreators";

export const fetchNotifications = ({
  limit = "10",
  page = "",
  search = "",
  ownerId,
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getNotifications());
    try {
      console.log("ownerId ===>", ownerId);
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);
      params.append("action_status", false);
      params.append("send_status", true);
      params.append("notification_type", "alert");
      const response = await getData(`/v1/notifications/?${params.toString()}`);
      dispatch(actionsCreators.getNotificationsSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getNotificationsFail(error));
    }
  };
};

// ===========================================================================

export const fetchDropdownNotifications = ({
  limit = "10",
  page = "",
  search = "",
  ownerId,
  callBackFn,
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getNotificationsDropdown());
    try {
      console.log("ownerId ===>", ownerId);
      // Construct the query parameters
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);
      params.append("action_status", false);
      params.append("send_status", true);
      params.append("notification_type", "alert");
      const response = await getData(`/v1/notifications/?${params.toString()}`);
      dispatch(actionsCreators.getNotificationsDropdownSuccess(response));
    } catch (error) {
      dispatch(actionsCreators.getNotificationsDropdownFail(error));
    }
  };
};
// ===========================================================================

export const editNotification = (
  notificationId,
  toast,
  callBackFn,
  getNotificationsInDropDown
) => {
  return async (dispatch) => {
    dispatch(actionsCreators.putNotification());
    try {
      const response = await putData(
        `/v1/notifications/update/status/${notificationId}`
      );
      console.log("response ===>", response);
      dispatch(actionsCreators.putNotificationSuccess(response));
      callBackFn();
      getNotificationsInDropDown();
      showToast(toast, response?.message, "success");
    } catch (error) {
      console.log("error ===>", error);
      dispatch(actionsCreators.putNotificationFail(error));
    }
  };
};
