import { call, put, takeEvery } from "redux-saga/effects";
import Server from "../../API/Server";
import { SET_PRODUCTS_FROM_SERVER_WATCHER } from "../reducers/products";
import { setProductsFromServer } from "../reducers/products";

function* setProducts () {
    const data = yield call(() => new Promise(res => res(Server.getProducts()))); 
    yield put(setProductsFromServer(data));
};

export default function* setProductsWatcher() {
    yield takeEvery(SET_PRODUCTS_FROM_SERVER_WATCHER, setProducts)
}
