import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

// A list item showing stock symbol, price, up/down percentage
export const StockListItem = ({ symbol, price, shares, value, percent }) => {
    // Setting color theme based on stock going up or down
    let textColor = ''
    const priceUpColor = '#21ce99'
    const priceDownColor = '#f45531'
    const priceFlatColor = '#b1bfc4'
    let percentFloat = parseFloat(percent)
    if (percentFloat > 0) {
        textColor = priceUpColor
    }
    else if (percentFloat < 0) {
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
    return (
        <div >
            <table style={styles.tableStyle}>
                <tbody style={{ color: textColor }}>
                    <tr>
                        <td>
                            <b> {symbol} </b>
                            <br />
                            <small>{shares} {sharesString}</small>
                        </td>
                        <td style={styles.percentCell}>
                            <div style={percentDivStyle}>
                                {percent}%
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>${price} </b>
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
    price: PropTypes.string.isRequired,
    shares: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percent: PropTypes.string.isRequired
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