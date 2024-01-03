// import { createStore, applyMiddleware } from "redux";
// import { fitnessTrackerReducer } from "./reducer";
// import thunk from "redux-thunk";
// export const store = createStore(fitnessTrackerReducer, applyMiddleware(thunk));

import { createStore, applyMiddleware, compose } from "redux";
import { fitnessTrackerReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  fitnessTrackerReducer,
  composeEnhancers(applyMiddleware(thunk))
);
