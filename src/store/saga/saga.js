import { all } from 'redux-saga/effects';
import setProductsWatcher from './setProducts';

export default function* rootWatcher() {
    yield all([
        setProductsWatcher()
    ]);
};