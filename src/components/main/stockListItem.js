import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

// A list item showing stock symbol, price, up/down percentage
export const StockListItem = ({ symbol, price, shares, previousClose }) => {
    // Calculating up/down percent change in price from current price and 
    // previous close
    let percent = parseFloat(((price - previousClose) / previousClose * 100).toFixed(2))
    // Setting color theme based on stock going up or down
    let textColor = ''
    const priceUpColor = '#21ce99'
    const priceDownColor = '#f45531'
    const priceFlatColor = '#b1bfc4'
    if (percent > 0) {
        textColor = priceUpColor
    }
    else if (percent < 0) {
        textColor = priceDownColor
    }
    else {
        textColor = priceFlatColor
    }
    let sharesString = ''
    if (shares > 1) {
        sharesString = 'SHARES'
    }
    else {
        sharesString = 'SHARE'
    }

    let percentDivStyle = {
        backgroundColor: textColor,
        color: 'rgb(4, 13, 20)',
        width: '72px',
        height: '32px',
        lineHeight: '32px',
        borderRadius: '4px',
        textAlign: 'center'
    }
    // Calculate the total value of the stock
    let value = parseFloat((shares * price).toFixed(2)).toLocaleString()
    return (
        <div >
            <table style={styles.tableStyle}>
                <tbody style={{ color: textColor }}>
                    <tr>
                        <td>
                            <b> {symbol} </b>
                            <br />
                            <small>{shares.toLocaleString()} {sharesString}</small>
                        </td>
                        <td style={styles.percentCell}>
                            <div style={percentDivStyle}>
                                {percent}%
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>${parseFloat(parseFloat(price).toFixed(2)).toLocaleString()} </b>
                        </td>
                        <td style={styles.valueCell}>
                            ${value}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Divider />
        </div >
    )
}


const propTypes = {
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    previousClose: PropTypes.number.isRequired
}

const styles = {
    tableStyle: {
        width: '100%',
        padding: '4px',
        paddingLeft: '12px'
    },
    valueCell: {
        textAlign: 'right'
    },
    percentCell: {
        textAlign: 'right',
        float: 'right'
    }
}

export default connect()(StockListItem)