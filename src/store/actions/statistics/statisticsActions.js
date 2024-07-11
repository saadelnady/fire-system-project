import { getData } from "../../../API/API";
import * as actionsCreators from "./statisticsActionsCreators";

export const fetchStatistics = ({
  limit = "",
  page = "",
  text = "",
  status = "",
  type = "",
} = {}) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getStatistics());
    try {
      let response = await getData(`/v1/statistics`);

      dispatch(actionsCreators.getStatisticsSuccess(response?.list[0]));
    } catch (error) {
      dispatch(actionsCreators.getStatisticsFail(error));
    }
  };
};
