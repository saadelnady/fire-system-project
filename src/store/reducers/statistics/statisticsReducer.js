import { STATISTICS_ACTIONS_TYPES } from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  statistics: [],
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {

      case STATISTICS_ACTIONS_TYPES.GET_STATISTICS:
      return { ...state, isLoading: true };

    case STATISTICS_ACTIONS_TYPES.GET_STATISTICS_SUCCESS:
      return {
        ...state,
        statistics: [...state.statistics,action.payLoad],
        isLoading: false,
        error: null,
      };

    case STATISTICS_ACTIONS_TYPES.GET_STATISTICS_FAIL:
      return { ...state, isLoading: false, error: action.payLoad };

   
    default:
      return state;
  }
};

export { statisticsReducer };
