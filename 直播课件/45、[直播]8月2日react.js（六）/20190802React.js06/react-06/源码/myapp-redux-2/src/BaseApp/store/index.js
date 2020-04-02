import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import cart from './reducer/cart';
import items from './reducer/items';
import user from './reducer/user';
import users from './reducer/users';

const reducers = combineReducers({
    cart,
    items,
    user,
    users
});

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;