'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Main = ({ debug }) => {
    return (
        <div>
            {debug==''?'Empty Debug':debug}
        </div>
    )
}
const propTypes = {
    debug: PropTypes.string
}

export default connect(
    (state) => {
        return {
            debug: state.robinhood.debug
        }
    },
    (dispatch) => {
        return {}
    }
)(Main)