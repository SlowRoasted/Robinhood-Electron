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
            getAccountAndPortfolio,
            getPortfolioPrices } = this.props
        // This will update equity and cash numbers
        const updateAccount = () => {
            getAccountAndPortfolio(() => {
                console.log('updating account')
                this.timer = setTimeout(updateAccount, 5000);
            })
        }
        // Updates stock prices in the current portfolio
        const updatePortfolioPrice = () => {
            getPortfolioPrices(() => {
                console.log('updating prices')
                this.timer = setTimeout(updatePortfolioPrice, 5000);
            })
        }
        // Updates list numbers of shares held
        const updatePositions = () => {
            getPositions(() => {
                console.log('updating positions')
                this.timer = setTimeout(updatePositions, 20000);
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
        console.log(this.timer)
        clearTimeout(this.timer);
    }
    render() {
        const { debug, positions, user, account, portfolio,
            positionInstruments, portfolioPrices } = this.props
        // Sets the correct string formats for equity and cash
        // TODO In extended hours equity value is wrong
        let equity = portfolio.equity ? portfolio.equity : 0
        equity = parseFloat(equity).toFixed(2).toLocaleString()
        let cash = 0
        if (account.margin_balances) {
            cash = account.margin_balances.unallocated_margin_cash
        }
        else if (account.cash) {
            cash = acocunt.cash
        }
        cash = parseFloat(cash).toFixed(2).toLocaleString()
        return (
            <div >
                <AppBar
                    title="Robinhood-Electron"
                    iconElementLeft={<img style={styles.icon} src='img/logo.png' />}
                />
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
                                shares={
                                    parseInt(positions[index].quantity)}
                                price={portfolioPrices ? (
                                    portfolioPrices[index].last_extended_hours_trade_price ?
                                        portfolioPrices[index].last_extended_hours_trade_price :
                                        portfolioPrices[index].bid_price) : 0}
                                previousClose={portfolioPrices ? portfolioPrices[index].previous_close : 0} />
                        )}
                    </List>
                </Drawer>
                <Grid fluid>
                    <Row style={styles.rightContent}>
                        {JSON.stringify(debug == '' ? 'Empty Debug' : debug)}
                    </Row>
                </Grid>
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
    portfolio: PropTypes.object.isRequired,
    positionInstruments: PropTypes.array.isRequired,
    getPortfolioPrices: PropTypes.func.isRequired,
    portfolioPrices: PropTypes.object.isRequired
}

const styles = {
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
    wrapText: {
        wordWrap: 'break-word'
    },
    leftNavContainer: {
        top: '64px',
        overflow: 'hidden',
        height: 'calc(100% - 64px)'
    },
    rightContent: {
        paddingLeft: '256px'
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
            portfolio: state.robinhood.portfolio,
            positionInstruments: state.robinhood.positionInstruments,
            portfolioPrices: state.robinhood.portfolioPrices
        }
    },
    (dispatch) => {
        return {
            getPositions: (callback) => dispatch(getPositions(callback)),
            getPositionInstruments: () => dispatch(getPositionInstruments()),
            getAccountAndPortfolio: (callback) => dispatch(getAccountAndPortfolio(callback)),
            getPortfolioPrices: (callback) => dispatch(getPortfolioPrices(callback))
        }
    }
)(Main)