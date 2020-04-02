import {createStore, combineReducers} from 'redux';

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

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;