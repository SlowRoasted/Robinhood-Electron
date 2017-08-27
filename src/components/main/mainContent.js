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
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import TradePanel from './tradePanel';

// Container for all pages, handles page navigation
export const MainContent = () => {
    return (
        <Grid fluid style={styles.rightContent}>
            <Row style={styles.row}>
                <Col xs={12} md={12} style={styles.graphContainer}>
                    Graph Placeholder
                   <img src='img/logo.png' style={{ width: '300px' }} />
                </Col>
            </Row>
            <Divider/>
            <Row style={styles.row}>
                <Col xs={6} md={4} style={styles.tradeContainer}>
                    <TradePanel />
                </Col>
                <Col xs={4} md={4} style={styles.statsContainer}>
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
                <Col xs={2} md={4} style={styles.newsContainer}>
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
        </Grid>
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
        paddingTop: '64px'
    },
}

export default connect()(MainContent)