'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

export const Main = ({ debug }) => {
    return (
        <Grid fluid>
            <Row>
                {debug == '' ? 'Empty Debug' : debug}
            </Row>
        </Grid>
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