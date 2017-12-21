import { applyMiddleware, createStore, compose } from "redux";

//Connect react router with redux
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

import logger from "redux-logger";
import thunk from "redux-thunk";

import promise from "redux-promise-middleware";
import rootReducer from './reducers/index.js';

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
