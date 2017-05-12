import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import Reducers from './reducers/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/app'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

require('./index.css');

injectTapEventPlugin();

const store = createStore(Reducers, applyMiddleware(thunk))

const robinhoodGreen = '#21ce99';
let muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: robinhoodGreen,
        primary1Color: robinhoodGreen,
        accent1Color: robinhoodGreen,
    },
});

render(
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
)
