import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { thunk } from "redux-thunk";
import { modeReducer } from "./reducers/mode/modeReducer";
import { userReducer } from "./reducers/userReducer/userReducer";
import { ownerReducer } from "./reducers/ownerReducer/ownerReducer";
import { statisticsReducer } from "./reducers/statistics/statisticsReducer";
import { typeReducer } from "./reducers/typesReducer/typeReducer";
import { projectReducer } from "./reducers/projectReducer/projectReducer";
import { notificationReducer } from "./reducers/notificationReducer/notificationReducer";
import { paymentReducer } from "./reducers/payments/paymentReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({
  modeReducer,
  userReducer,
  ownerReducer,
  statisticsReducer,
  typeReducer,
  projectReducer,
  notificationReducer,
  paymentReducer,
});
export const store = createStore(appReducers, enhancer);
