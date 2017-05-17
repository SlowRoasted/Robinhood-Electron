import { ActionTypes, setDebugString, getInstrument, getQuotes } from '../../actions'
import { Locations } from '../app'
import { StockListItem } from './stockListItem'
var async = require("async")

const setPositions = (positions) => {
    return {
        type: ActionTypes.SET_POSITIONS,
        positions: positions
    }
}

const setAccount = (account) => {
    return {
        type: ActionTypes.SET_ACCOUNT,
        account: account
    }
}

const setPortfolio = (portfolio) => {
    return {
        type: ActionTypes.SET_PORTFOLIO,
        portfolio: portfolio
    }
}

const setPortfolioPrices = (portfolioPrices) => {
    return {
        type: ActionTypes.SET_PORTFOLIO_PRICES,
        portfolioPrices: portfolioPrices
    }
}
// This is an array of instruments objects for each element in the positions array
const setPositionInstruments = (positionInstruments) => {
    return {
        type: ActionTypes.SET_POSITION_INSTRUMENTS,
        positionInstruments: positionInstruments
    }
}
// Callback can be used to trigger a next update after an error
export const getPositions = (callback) => {
    return (dispatch, getState) => {
        let Robinhood = getState().robinhood.client
        Robinhood.positions((err, response, body) => {
            if (err) {
                console.error(err);
            } else if (response.statusCode >= 400) {
                console.log("Error getting positions")
            }
            else {
                let results = []
                // Get paginated data
                if (body.next) {
                    console.log('Getting paginated data')
                    getPaginatedResults(Robinhood, body, (r) => { results = r })
                }
                else {
                    results = body.results
                }
                console.log(results)
                dispatch(setPositions(results))
                dispatch(getPositionInstruments())
            }
            if (callback) {
                callback()
            }
        })

    }
}

// For each entry in positions, make a get call to the instrument url
// Should return stock symbol and other data on the stock
export const getPositionInstruments = () => {
    return (dispatch, getState) => {
        let positions = getState().robinhood.positions
        async.map(positions, (position, callback) => {
            getInstrument(position.instrument).then(r => callback(null, r))
        }, (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                dispatch(setPositionInstruments(results))
            }
        })
    }
}

// Get combined result of all pages of a paginated result
const getPaginatedResults = (Robinhood, firstBody, callback) => {
    let currNext = firstBody.next
    let results = firstBody.results
    while (!currNext) {
        Robinhood.url(currNext, (err, response, body) => {
            if (err) {
                console.error(err);
            } else if (response.statusCode >= 400) {
                console.log("Error getting paginated data")
            }
            else {
                results = results.concat(body.results)
                currNext = body.next
            }
            callback(results)
        })
    }
}

// Updating account and portfolio info including current equity and cash
export const getAccountAndPortfolio = (callback) => {
    return (dispatch, getState) => {
        let Robinhood = getState().robinhood.client
        Robinhood.accounts((err, response, body) => {
            if (err) {
                console.error(err);
            } else if (response.statusCode >= 400) {
                console.log("Error getting account")
            }
            else {
                dispatch(setAccount(body.results[0]))
                console.log('account')
                console.log(body)
                // Getting portfolio using the url returned in the account body
                Robinhood.url(body.results[0].portfolio, (err, response, body) => {
                    if (err) {
                        console.error(err);
                    } else if (response.statusCode >= 400) {
                        console.log("Error getting portfolio")
                    }
                    else {
                        console.log('portfolio')
                        console.log(body)
                        dispatch(setPortfolio(body))
                    }
                    if (callback) {
                        callback()
                    }
                })
            }
        })
    }
}

// Update realtime prices of the list of stocks
export const getPortfolioPrices = (callback) => {
    return (dispatch, getState) => {
        let positionInstruments = getState().robinhood.positionInstruments
        let symbols = positionInstruments.map((instrument) => {
            return instrument.symbol
        })
        if (symbols.length == 0) {
            if (callback) {
                callback()
            }
        }
        else {
            getQuotes(symbols).then(r => {
                console.log(r)
                dispatch(setPortfolioPrices(r))
                if (callback) {
                    callback()
                }
            })
        }
    }
}