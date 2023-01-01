
const defaultState = {
    products: []
};

const SET_PRODUCTS_FROM_SERVER = 'SET_USERS_FROM_SERVER';
export const SET_PRODUCTS_FROM_SERVER_WATCHER = 'SET_USERS_FROM_SERVER_WATCHER';

export default function productsReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_PRODUCTS_FROM_SERVER:
            return {...state, products: [...action.payload]};
        default:
            return state;
    };
};

export const setProductsFromServerWatcher = () => ({type: SET_PRODUCTS_FROM_SERVER_WATCHER});
export const setProductsFromServer = payload => ({type: SET_PRODUCTS_FROM_SERVER, payload});