
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleware = [thunk, logger];

const store = createStore(
    reducers,
    {},
    applyMiddleware(...middleware)
);

export default store;