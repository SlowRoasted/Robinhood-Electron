import { ActionTypes, setDebugString } from '../../actions'
import { Locations } from '../app'

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
// Callback can be used to trigger a next update after an error
export const getPositions = (callback) => {
    return (dispatch, getState) => {
        let credentials = getState().robinhood.credentials
        if (credentials.username && credentials.password) {
            var Robinhood = require('robinhood')(credentials, () => {
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
                    }
                    callback()
                })
            });
        }

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


export const updateAccountAndPortfolio = (Robinhood) => {
    return (dispatch, getState) => {
        console.log("updating accounts")
        Robinhood.accounts((err, response, body) => {
            if (err) {
                console.error(err);
            } else if (response.statusCode >= 400) {
                console.log("Error getting account")
            }
            else {
                dispatch(setAccount(body.results[0]))
                console.log('account')
                console.log(body.results[0])
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
                })
            }
        })
    }
}