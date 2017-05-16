'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



class Main extends Component {
    componentDidMount() {
        const { getPositions } = this.props
        const update = () => {
            getPositions(() => {
                console.log('tick')
                this.timer = setTimeout(update, 10000);
            })

        }
        update.bind(this)
        update()
    }

    componentWillUnmount() {
        console.log(this.timer)
        clearTimeout(this.timer);
    }
    render() {
        const { debug, positions, user } = this.props

        return (
            <Grid fluid>
                <Row>
                    <Col xs={4} md={3} style={styles.wrapText}>
                        <Row>
                            <label>
                                Hi! {user.first_name} {user.last_name}
                            </label>
                            <br />
                            <label>
                                Username: {user.username}
                            </label>
                        </Row>
                        <Row>
                            <Divider />
                            <List>
                                {positions.map((elem) =>
                                    <ListItem
                                        key={elem.instrument}
                                        primaryText={elem.average_buy_price} />
                                )}
                            </List>
                        </Row>
                    </Col>
                    <Col xs={8} md={9}>
                        <div style={styles.text}>
                            {JSON.stringify(debug == '' ? 'Empty Debug' : debug)}
                        </div>
                    </Col>
                </Row>
            </Grid >
        )
    }
}
const propTypes = {
    debug: PropTypes.string,
    getPositions: PropTypes.func.isRequired,
    positions: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
}

const styles = {
    wrapText: {
        wordWrap: 'break-word'
    }
}

export default connect(
    (state) => {
        return {
            debug: state.robinhood.debug,
            positions: state.robinhood.positions,
            user: state.robinhood.user,
            account: state.robinhood.account,
            portfolio: state.robinhood.portfolio
        }
    },
    (dispatch) => {
        return {
            getPositions: (callback) => dispatch(getPositions(callback))
        }
    }
)(Main)