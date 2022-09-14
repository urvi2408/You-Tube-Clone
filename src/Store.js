import {applyMiddleware, createStore} from "redux";
import rootReducers from "./Reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger'

const store = createStore(
    rootReducers,
    applyMiddleware(thunk, logger)
);

export default store;