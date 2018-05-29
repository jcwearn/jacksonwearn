'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const { Provider  } = require('react-redux');
const { applyMiddleware, createStore } = require('redux');

const reducer = require('./reducer.js');
const { createLogger } = require('redux-logger');
const logger = createLogger();

const App = require('./components/App');

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
