'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Login from './login/login'
import Main from './main/main'
import Debug from './UITesting/debugMain'
import PropTypes from 'prop-types'
// Container for all pages, handles page navigation
export const App = ({ location }) => {
    switch (location) {
        case Locations.LOGIN:
            return (<Login />)
        case Locations.MAIN:
            return (<Main />)
        default:
            return (<Debug />)
    }
}

const propTypes = {
    location: PropTypes.string.isRequired
}

export const Locations = {
    LOGIN: 'login',
    MAIN: 'main',
    DEBUG: 'debug'
}
export default connect(
    (state) => {
        return {
            location: state.app.location
        }
    }
)(App)