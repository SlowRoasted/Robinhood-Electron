'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    getPositions,
    getPositionInstruments,
    getAccountAndPortfolio,
    getPortfolioPrices
} from './mainActions'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/Menu'
import Drawer from 'material-ui/Drawer'
import StockListItem from './stockListItem'


class Main extends Component {
    // Sets all the updater schedules when the component is mounted
    componentDidMount() {
        const { getPositions,
            getPositionInstruments,
            getAccount,
            getPortfolioPrices } = this.props
        // This will update equity and cash numbers
        const updateAccount = () => {
            getAccount(() => {
                console.log('updating account')
                this.accountTimer = setTimeout(updateAccount, 5000)
            })
        }
        // Updates stock prices in the current portfolio
        const updatePortfolioPrice = () => {
            getPortfolioPrices(() => {
                console.log('updating prices')
                this.pricesTimer = setTimeout(updatePortfolioPrice, 5000)
            })
        }
        // Updates list numbers of shares held
        const updatePositions = () => {
            getPositions(() => {
                console.log('updating positions')
                this.positionsTimer = setTimeout(updatePositions, 20000)
            })
        }
        updatePositions.bind(this)
        updateAccount.bind(this)
        updatePortfolioPrice.bind(this)

        updatePositions()
        updateAccount()
        updatePortfolioPrice()
    }

    componentWillUnmount() {
        console.log('Clearning update timers')
        clearTimeout(this.accountTimer)
        clearTimeout(this.pricesTimer)
        clearTimeout(this.positionsTimer)
    }
    render() {
        const { debug, positions, user, account,
            positionInstruments, portfolioPrices } = this.props

        // Choosing between extended hour prices vs regular hourss price.
        let prices = portfolioPrices.map((p) => {
            return p.last_extended_hours_trade_price ?
                p.last_extended_hours_trade_price : p.last_trade_price
        })
        let shares = positions.map((p) => {
            return parseInt(p.quantity)
        })
        if (shares.length > 0 && prices.length > 0 && (prices.length != shares.length)) {
            console.error('prices and shares arrays length mismatch!')
        }
        // let equity = portfolio.extended_hours_equity ?
        //     portfolio.extended_hours_equity : 0
        // 

        let cash = 0
        let marginLimit = 0.0
        if (account.margin_balances) {
            cash = account.margin_balances.unallocated_margin_cash
            marginLimit = account.margin_balances.margin_limit
        }
        else if (account.cash) {
            cash = acocunt.cash
        }

        // Multiply shares and prices then sum, so portfolio object would be
        // no longer needed
        let equity = shares.map((s, i) => {
            return s * prices[i]
        }).reduce((a, b) => {
            return a + b;
        }, 0) + parseFloat(cash) - marginLimit
        // Sets the correct string formats for equity 
        // toFixed returns string, need to parse back to float to get locale string
        equity = parseFloat(parseFloat(equity).toFixed(2)).toLocaleString()
        // Sets the correct string formats for cash
        cash = parseFloat(parseFloat(cash).toFixed(2)).toLocaleString()
        return (
            <div>
                <AppBar
                    title="Robinhood-Electron"
                    iconElementLeft={<img style={styles.icon} src='img/logo.png' />}
                    style={styles.appbar}
                />
                {/*Left Nav*/}
                <Drawer containerStyle={styles.leftNavContainer}
                    style={styles.leftNav}>
                    <Card containerStyle={styles.userCard}>
                        <CardHeader
                            title={`Hi! ${user.first_name} ${user.last_name}`}
                            subtitle={`Username: ${user.username}`}
                            actAsExpander={false}
                            showExpandableButton={false}
                            style={styles.userCardHeader}
                        />
                        <CardText expandable={false} style={styles.userCardText}>
                            <h3>PORTFOLIO VALUE</h3>
                            ${equity}
                            <h3> BUYING POWER </h3>
                            ${cash}
                        </CardText>
                        <Divider />
                    </Card>
                    <List style={styles.stocksList}>
                        {/*Price here is chosen as the last extended hour trading
                         price if it exits, else the bid price*/}
                        {positionInstruments.map((elem, index) =>
                            <StockListItem
                                key={elem.symbol}
                                symbol={elem.symbol}
                                shares={shares[index] ? shares[index] : 0}
                                price={prices[index] ? prices[index] : 0}
                                previousClose={portfolioPrices[index]
                                    ? portfolioPrices[index].previous_close : 0} />
                        )}
                    </List>
                </Drawer>
            </div >
        )
    }
}
const propTypes = {
    debug: PropTypes.string,
    getPositions: PropTypes.func.isRequired,
    positions: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    positionInstruments: PropTypes.array.isRequired,
    getPortfolioPrices: PropTypes.func.isRequired,
    portfolioPrices: PropTypes.object.isRequired,
    getAccount: PropTypes.func.isRequired
}

const styles = {
    appbar: {
        position: 'fixed'
    },
    userCard: {
        position: 'absolute'
    },
    userCardHeader: {
        paddingBottom: '0px'
    },
    userCardText: {
        paddingTop: '0px'
    },
    grid: {
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem'
    },
    leftNavContainer: {
        top: '64px',
        overflow: 'hidden',
        height: 'calc(100% - 64px)'
    },
    stocksList: {
        marginTop: '219px',
        overflowY: 'auto',
        padding: '0px',
        height: 'calc(100% - 219px)'
    },
    icon: {
        width: 32,
        marginLeft: 16,
        marginRight: 16
    }
}

export default connect(
    (state) => {
        return {
            debug: state.robinhood.debug,
            positions: state.robinhood.positions,
            user: state.robinhood.user,
            account: state.robinhood.account,
            positionInstruments: state.robinhood.positionInstruments,
            portfolioPrices: state.robinhood.portfolioPrices
        }
    },
    (dispatch) => {
        return {
            getPositions: (callback) => dispatch(getPositions(callback)),
            getPositionInstruments: () => dispatch(getPositionInstruments()),
            getAccount: (callback) => dispatch(getAccountAndPortfolio(false, callback)),
            getPortfolioPrices: (callback) => dispatch(getPortfolioPrices(callback))
        }
    }
)(Main)