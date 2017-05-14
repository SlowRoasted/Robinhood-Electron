'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

class Main extends Component {
    componentDidMount() {
        const update = () => {
            console.log('tick')
            this.timer = setTimeout(update, 500);
        }
        update.bind(this)
        update()
    }

    componentWillUnmount() {
        console.log(this.timer)
        clearTimeout(this.timer);
    }
    render() {
        const { debug } = this.props
        return (
            <Grid fluid>
                <Row>
                    <Col xs={4} md={3}>
                        <div style={styles.text}>
                            {JSON.stringify(debug == '' ? 'Empty Debug' : debug)}
                        </div>
                    </Col>
                    <Col xs={8} md={9}>
                        <div style={styles.text}>
                            {JSON.stringify(debug == '' ? 'Empty Debug' : debug)}
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
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