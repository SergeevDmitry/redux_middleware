import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk, promise, logger));

export default store;
