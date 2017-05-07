'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Login from './login';;
import PropTypes from 'prop-types';

export const App = ({ location }) => {
    if (location == Locations.LOGIN) {
        return (<Login />)
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
    },
    (dispatch) => {
        return {}
    }
)(App)