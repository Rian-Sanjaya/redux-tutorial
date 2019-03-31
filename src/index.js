import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create store
import { combineReducers, createStore } from 'redux';
// Provider give access store to the app
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

// need to pass reducer into createStore
// to pre-populate the store, we pass in the initial state as the sedond argument
const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        user: 'Micheal'
    },
    window.devToolsExtension && window.devToolsExtension()
);

// Provider give the app access to the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
