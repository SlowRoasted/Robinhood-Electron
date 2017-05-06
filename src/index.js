import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import Reducers from './reducers/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/app'

require('./index.css');

injectTapEventPlugin();

const store = createStore(Reducers, applyMiddleware(thunk))

render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('app')
)
