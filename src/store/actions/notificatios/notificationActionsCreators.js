import { NOTIFICATIOS_ACTIONS_TYPES } from "../actionTypes";
// ====================================

export const getNotifications = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS,
    payLoad,
  };
};
export const getNotificationsSuccess = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_SUCCESS,
    payLoad,
  };
};
export const getNotificationsFail = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const getNotificationsDropdown = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN,
    payLoad,
  };
};
export const getNotificationsDropdownSuccess = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN_SUCCESS,
    payLoad,
  };
};
export const getNotificationsDropdownFail = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN_FAIL,
    payLoad,
  };
};
// ===========================================================================
export const putNotification = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION,
    payLoad,
  };
};
export const putNotificationSuccess = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION_SUCCESS,
    payLoad,
  };
};
export const putNotificationFail = (payLoad) => {
  return {
    type: NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION_FAIL,
    payLoad,
  };
};
