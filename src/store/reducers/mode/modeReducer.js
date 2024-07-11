import { TOGGLE_DARK_MODE } from "../../actions/actionTypes";

const initialState = {
  isDark: localStorage.getItem("isDark")
    ? JSON.parse(localStorage.getItem("isDark"))
    : false,
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newIsDark = !state.isDark;
      // Update localStorage
      localStorage.setItem("isDark", JSON.stringify(newIsDark));
      return {
        ...state,
        isDark: newIsDark,
      };
    default:
      return state;
  }
};

export { modeReducer };
