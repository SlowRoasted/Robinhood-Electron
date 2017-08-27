import { connect } from 'react-redux'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export const TradePanel = ({symbol, currentPrice}) => {
    return (
        <div>
            <b>Place an order </b>
            <RadioButtonGroup name="buyOrSell" defaultSelected="buy">
                <RadioButton
                    value="buy"
                    label="Buy"
                />
                <RadioButton
                    value="sell"
                    label="Sell"
                />
            </RadioButtonGroup>
            <br />
            <label> {symbol} currently at ${currentPrice} </label>
            <br />
            <TextField
                hintText="Number of shares"
                floatingLabelText="Number of shares"
                type="number" step="1"
                pattern="\d+"
                floatingLabelFixed={true}
                min={0}
            />
            <br />
            <SelectField
                floatingLabelText="Order Type"
                value={2}
                floatingLabelFixed={true}>
                <MenuItem value={1} primaryText="Market" />
                <MenuItem value={2} primaryText="Limit" />
            </SelectField>
            <div>
                <br />
                <TextField
                    hintText="Limit Price"
                    floatingLabelText="Limit Price"
                    type="number"
                    step="0.01"
                    floatingLabelFixed={true}
                    pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                    min={0} 
                    defaultValue={currentPrice}/>
                <br />
                <label> Buying 10 shares of AMZN for <br />
                    $1,234.01 in total</label>
                <br />
                <br />
                <RaisedButton label="Place Order" primary={true} />
            </div>
        </div>
    )

}

const propTypes = {
}    

export default connect()(TradePanel)