'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const { Provider  } = require('react-redux');
const { applyMiddleware, createStore } = require('redux');
const { createLogger } = require('redux-logger');
const { createLogicMiddleware } = require('redux-logic');

const reducer = require('./reducer.js');
const App = require('./components/App');
const scrollOffsetLogic = require('./logic/scrollOffsetLogic');

const logger = createLogger();
const logicMiddleware = createLogicMiddleware([scrollOffsetLogic]);
const middleware = applyMiddleware(logger, logicMiddleware);

const store = createStore(reducer, middleware);

const handleScroll = () => (store.dispatch({ type: 'SET_SCROLL_OFFSET', scrollOffset: window.pageYOffset }));
window.addEventListener('scroll', handleScroll);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
