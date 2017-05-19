'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { List, ListItem } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

// Container for all pages, handles page navigation
export const DebugContent = () => {
    return (
        <Grid fluid style={styles.rightContent}>
            <Row style={styles.row}>
                <Col xs={7} md={8} style={styles.graphContainer}>
                    Graph Placeholder
                        <img src='img/logo.png' style={{ width: '300px' }} />
                </Col>
                <Col xs={5} md={4} style={styles.statsContainer}>
                    <div>
                        <b>Stats</b>
                        <Table selectable={false}>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>Open</TableRowColumn>
                                    <TableRowColumn>123</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Close</TableRowColumn>
                                    <TableRowColumn>233</TableRowColumn>
                                </TableRow><TableRow>
                                    <TableRowColumn>High</TableRowColumn>
                                    <TableRowColumn>233</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Low</TableRowColumn>
                                    <TableRowColumn>123</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Open</TableRowColumn>
                                    <TableRowColumn>123</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Close</TableRowColumn>
                                    <TableRowColumn>233</TableRowColumn>
                                </TableRow><TableRow>
                                    <TableRowColumn>High</TableRowColumn>
                                    <TableRowColumn>233</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Low</TableRowColumn>
                                    <TableRowColumn>123</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row style={styles.row}>
                <Col xs={6} md={7} style={styles.tradeContainer}>
                    <div>
                        <div style={{float: 'left', paddingRight: '32px'}}>
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
                            <label> AMZN currently at $966.66 </label>
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
                        </div>
                        <div style={{paddingLeft: '32px'}}>
                            <br />
                            <TextField
                                hintText="Limit Price"
                                floatingLabelText="Limit Price"
                                type="number"
                                step="0.01"
                                floatingLabelFixed={true}
                                pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                                min={0} />
                            <br />
                            <label> Buying 10 shares of AMZN for <br />
                                $1,234.01 in total</label>
                            <br />
                            <br />
                            <RaisedButton label="Place Order" primary={true} />
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={5} style={styles.newsContainer}>
                    <div>
                        <b> News </b>
                        <List>
                            <ListItem primaryText="News meh meh" />
                            <Divider />
                            <ListItem primaryText="News meh meh" />
                            <Divider />
                            <ListItem primaryText="News meh meh" />
                            <Divider />
                            <ListItem primaryText="News meh meh" />
                        </List>
                    </div>
                </Col>
            </Row>
        </Grid >
    )
}

const styles = {
    row: {
        padding: '8px',
        margin: '0px'
    },
    graphContainer: {
        maxHeight: '600px'
    },
    statsContainer: {
    },
    tradeContainer: {
    },
    newsContainer: {
    },
    rightContent: {
        paddingLeft: '264px',
        paddingRight: '8px',
        wordWrap: 'break-word',
        paddingTop: '64px',
        color: '#21ce99'
    },
}

export default connect()(DebugContent)