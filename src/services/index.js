import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : args => args
);
export const store = createStore(rootReducer, enhancer);