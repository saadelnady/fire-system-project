import { toast } from "react-toastify";
import {
  deleteData,
  getData,
  patchData,
  postData,
  putData,
} from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./paymentActionsCreators.js";

export const fetchPayments = ({
  limit = "10",
  page = "",
  search = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getPayments());

    try {
      const params = new URLSearchParams();
      if (limit) params.append("limit", limit);
      if (page) params.append("page", page);
      if (search) params.append("search", search);

      const response = await getData(
        `/v1/payments/clients?${params.toString()}`
      );
      console.log("response ====>", response);
      dispatch(actionsCreators.getPaymentsSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(actionsCreators.getPaymentsFail(error));
    }
  };
};

/* ================================================================================================== */
export const fetchPayment = (ownerId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getPayment(ownerId));
    try {
      const response = await getData(`/v1/payments/client/${ownerId}`);
      dispatch(actionsCreators.getPaymentSuccess(response?.data));
    } catch (error) {
      dispatch(actionsCreators.getPaymentFail(error));
    }
  };
};

/* ================================================================================================== */
export const addPayment = (formData, fetchPayment) => {
  return async (dispatch) => {
    console.log("formData ======>", formData);
    dispatch(actionsCreators.addPayment(formData));
    try {
      const response = await postData(`/v1/balances`, formData);
      if (response?.status) {
        dispatch(actionsCreators.addPaymentSuccess(response));
        showToast(toast, response?.message, "success");
        fetchPayment();
      }
    } catch (error) {
      console.log("error", error);
      dispatch(actionsCreators.addPaymentFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const editPayment = (payload, toast, balance_id, fetchPayment) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editPayment(payload));
    try {
      console.log("payload ===>", payload);
      console.log("projectId ===>", balance_id);

      const response = await putData(`/v1/balances/${balance_id}`, payload);
      if (response?.status) {
        dispatch(actionsCreators.editPaymentSuccess(response?.data));
        showToast(toast, response?.message, "success");
        fetchPayment();
      }
    } catch (error) {
      dispatch(actionsCreators.editPaymentFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const deletePayment = (balance_id, toast, fetchPayment) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deletePayment(balance_id));
    try {
      const response = await deleteData(`/v1/balances/${balance_id}`);
      dispatch(actionsCreators.deletePaymentSuccess(response?.data));
      showToast(toast, response?.message, "success");
      fetchPayment();
    } catch (error) {
      dispatch(
        actionsCreators.deletePaymentFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
/* ================================================================================================== */
export const chechPaymentPaid = (balance_id, toast, fetchPayment) => {
  return async (dispatch) => {
    dispatch(actionsCreators.checkPaymentPaid(balance_id));
    try {
      const response = await patchData(`/v1/balances/${balance_id}`);
      console.log("response ====>", response);
      dispatch(actionsCreators.checkPaymentPaidSuccess(response));
      showToast(toast, response?.message, "success");
      fetchPayment();
    } catch (error) {
      dispatch(
        actionsCreators.checkPaymentPaidFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
