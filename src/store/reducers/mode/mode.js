import { TOGGLE_DARK_MODE } from "../../actions/actionsTypes";

const initialState = {
  isDark: false,
};

const mode = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export { mode };
