import { STATISTICS_ACTIONS_TYPES } from "../actionTypes";

export const getStatistics = (payLoad) => {
  return {
    type: STATISTICS_ACTIONS_TYPES.GET_STATISTICS,
    payLoad,
  };
};
export const getStatisticsSuccess = (payLoad) => {
  return {
    type: STATISTICS_ACTIONS_TYPES.GET_STATISTICS_SUCCESS,
    payLoad,
  };
};
export const getStatisticsFail = (payLoad) => {
  return {
    type: STATISTICS_ACTIONS_TYPES.GET_STATISTICS_FAIL,
    payLoad,
  };
};
