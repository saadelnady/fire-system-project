import {
  PAYMENTS_ACTIONS_TYPES,
  PAYMENT_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  payments: [],
  total_pages: 0,
  payment: {},
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS:
      return { ...state, isLoading: true };

    case PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS_SUCCESS:
      console.log("action.payLoad ====>", action.payLoad);
      return {
        ...state,
        payments: action?.payLoad?.list,
        total_pages: action?.payLoad?.total_pages,
        isLoading: false,
        error: null,
      };

    case PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    //   ================================================================
    case PAYMENT_ACTIONS_TYPES.GET_PAYMENT:
      return { ...state, isLoading: true };

    case PAYMENT_ACTIONS_TYPES.GET_PAYMENT_SUCCESS:
      console.log("action.payLoad ====>", action.payLoad);
      return {
        ...state,
        // payments: [...state.statistics, action.payLoad],
        payment: action.payLoad,
        isLoading: false,
        error: null,
      };

    case PAYMENT_ACTIONS_TYPES.GET_PAYMENT_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };
    // ================================================================
    case PAYMENT_ACTIONS_TYPES.PUT_PAYMENT:
      return { ...state, isLoading: true };

    case PAYMENT_ACTIONS_TYPES.PUT_PAYMENT_SUCCESS:
      console.log("action.payLoad ====>", action.payLoad);
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case PAYMENT_ACTIONS_TYPES.PUT_PAYMENT_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };
    // ================================================================
    case PAYMENT_ACTIONS_TYPES.DELETE_PAYMENT:
      return { ...state, isLoading: true };

    case PAYMENT_ACTIONS_TYPES.DELETE_PAYMENT_SUCCESS:
      console.log("action.payLoad ====>", action.payLoad);
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    // ================================================================
    case PAYMENT_ACTIONS_TYPES.POST_PAYMENT:
      return { ...state, isLoading: true };

    case PAYMENT_ACTIONS_TYPES.POST_PAYMENT_SUCCESS:
      console.log("action.payLoad ====>", action.payLoad);
      return {
        ...state,

        isLoading: false,
        error: null,
      };

    case PAYMENT_ACTIONS_TYPES.POST_PAYMENT_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

    default:
      return state;
  }
};

export { paymentReducer };
