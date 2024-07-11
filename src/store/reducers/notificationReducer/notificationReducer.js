import { NOTIFICATIOS_ACTIONS_TYPES } from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  notifications: [],
  notificationsDropdown: [],
  total: 0,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS:
      return { ...state, isLoading: true };

    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifications: action.payLoad,
        error: null,
      };

    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================
    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN:
      return { ...state, isLoading: true };

    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notificationsDropdown: action.payLoad,
        total: action.payLoad?.total,
        error: null,
      };

    case NOTIFICATIOS_ACTIONS_TYPES.GET_NOTIFICATIONS_DROPDOWN_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };
    // ========================================================================

    case NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION:
      return { ...state, isLoading: true };

    case NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notificationsDropdown: action.payLoad,
        error: null,
      };

    case NOTIFICATIOS_ACTIONS_TYPES.PUT_NOTIFICATION_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    // ========================================================================

    default:
      return state;
  }
};

export { notificationReducer };
