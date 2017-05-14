'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

export const Main = ({ debug }) => {
    let debugText = JSON.stringify(debug == '' ? 'Empty Debug' : debug)
    return (
        <Grid fluid>
            <Row>
                <Col xs={4} md={3}>
                    <div style={styles.text}>
                        {debugText}
                    </div>
                </Col>
                <Col xs={8} md={9}>
                    <div style={styles.text}>
                        {debugText}
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}
const propTypes = {
    debug: PropTypes.string
}

const styles = {
    text: {
        wordWrap: 'break-word'
    }
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