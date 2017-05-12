'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Login from './login'
import Main from './main'
import PropTypes from 'prop-types'

// Container for all pages, handles page navigation
export const App = ({ location }) => {
    if (location == Locations.LOGIN) {
        return (<Login />)
    }
    else if (location == Locations.MAIN) {
        return (<Main />)
    }
}

const propTypes = {
    location: PropTypes.string.isRequired
}

export const Locations = {
    LOGIN: 'login',
    MAIN: 'main'
}
export default connect(
    (state) => {
        return {
            location: state.app.location
        }
    }
)(App)