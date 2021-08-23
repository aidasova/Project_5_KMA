import {createStore, applyMiddleware }  from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
// let store = createStore(reducer);

export default store;