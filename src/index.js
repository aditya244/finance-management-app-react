import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import settingsReducer from './Store/Reducers/settingsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootreducer = combineReducers({
  settings: settingsReducer,
  form: formReducer
})

const store = createStore(rootreducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
