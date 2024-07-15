import { PAYMENT_ACTIONS_TYPES, PAYMENTS_ACTIONS_TYPES } from "../actionTypes";

export const getPayments = (payLoad) => {
  return {
    type: PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS,
    payLoad,
  };
};
export const getPaymentsSuccess = (payLoad) => {
  return {
    type: PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS_SUCCESS,
    payLoad,
  };
};
export const getPaymentsFail = (payLoad) => {
  return {
    type: PAYMENTS_ACTIONS_TYPES.GET_PAYMENTS_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const getPayment = () => {
  return {
    type: PAYMENT_ACTIONS_TYPES.GET_PAYMENT,
  };
};

export const getPaymentSuccess = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.GET_PAYMENT_SUCCESS,
    payLoad,
  };
};

export const getPaymentFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.GET_PAYMENT_FAIL,
    payLoad,
  };
};
// ==================================================================================
export const addPayment = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.POST_PAYMENT,
    payLoad,
  };
};

export const addPaymentSuccess = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.POST_PAYMENT_SUCCESS,
    payLoad,
  };
};

export const addPaymentFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.POST_PAYMENT_FAIL,
    payLoad,
  };
};
// ========================================================================

export const editPayment = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.PUT_PAYMENT,
    payLoad,
  };
};
export const editPaymentSuccess = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.PUT_PAYMENT_SUCCESS,
    payLoad,
  };
};
export const editPaymentFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.PUT_PAYMENT_FAIL,
    payLoad,
  };
};

// ========================================================================
export const deletePayment = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.DELETE_PAYMENT,
    payLoad,
  };
};
export const deletePaymentSuccess = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.DELETE_PAYMENT_SUCCESS,
    payLoad,
  };
};
export const deletePaymentFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.DELETE_PAYMENT_FAIL,
    payLoad,
  };
};
// ========================================================================
export const checkPaymentPaid = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CHECK_PAYMENT_PAID,
    payLoad,
  };
};
export const checkPaymentPaidSuccess = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CHECK_PAYMENT_PAID_SUCCESS,
    payLoad,
  };
};
export const checkPaymentPaidFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CHECK_PAYMENT_PAID_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const clearPayment = () => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CLEAR_PAYMENT,
  };
};
export const clearPaymentSuccess = () => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CLEAR_PAYMENT_SUCCESS,
  };
};
export const clearPaymentFail = (payLoad) => {
  return {
    type: PAYMENT_ACTIONS_TYPES.CLEAR_PAYMENT_FAIL,
    payLoad,
  };
};
