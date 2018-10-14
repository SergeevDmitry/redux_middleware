import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import localStorage, { loadState } from '../middleware/local-storage';
import apiMiddleware from '../middleware/api';

import reducer from '../reducers';

const initialState = loadState('todos');
const store = createStore(reducer, initialState, applyMiddleware(apiMiddleware('http://localhost:3000/api'), thunk, promise, localStorage('todos'), logger));

export default store;
