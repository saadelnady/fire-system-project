import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { thunk } from "redux-thunk";
import { mode } from "./reducers/mode/mode";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({
  mode,
});
export const store = createStore(appReducers, enhancer);
