import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {hotcoldReducer} from '../reducers';

export default createStore(hotcoldReducer, applyMiddleware(thunk));