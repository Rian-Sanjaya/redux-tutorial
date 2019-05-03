import React from 'react';
import ReactDOM from 'react-dom';
// create store
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// Provider give access store to the app
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const storeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// need to pass reducer into createStore
// to pre-populate the store, we pass in the initial state as the sedond argument
const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        user: 'Micheal'
    },
    storeEnhancers
);

// Provider give the app access to the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
