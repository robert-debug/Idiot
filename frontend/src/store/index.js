import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session'
import trackReducer from './track';
import annotationReducer from './annotation';
import commentReducer from './comment';
import lineReducer from './line';

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  track: trackReducer,
  annotation: annotationReducer,
  comment: commentReducer,
  line: lineReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};



export default configureStore;
