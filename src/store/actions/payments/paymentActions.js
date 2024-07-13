import { deleteData, getData, postData, putData } from "../../../API/API";
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
