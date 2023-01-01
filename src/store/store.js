import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import productsReducer from './reducers/products';
import rootWatcher from './saga/saga';


const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    products: productsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootWatcher);

export default store;