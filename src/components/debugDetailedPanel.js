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
import { StockListItem } from './main/stockListItem'
import TextField from 'material-ui/TextField'


// Container for all pages, handles page navigation
export const DebugDetailedPanel = () => {
    return (
        <Grid fluid style={styles.rightContent}>
            <Row style={styles.row}>
                <Col xs={7} md={8} style={styles.graphContainer}>
                    Graph Placeholder
                        <img src='img/logo.png' style={{ width: '200px' }} />
                </Col>
                <Col xs={5} md={4} style={styles.statsContainer}>
                    Stats
                        <img src='img/logo.png' style={{ width: '200px' }} />
                </Col>
            </Row>
            <Row style={styles.row}>
                <Col xs={7} md={8} style={styles.tradeContainer}>
                    Trade
                        <img src='img/logo.png' style={{ width: '200px' }} />
                </Col>
                <Col xs={5} md={4} style={styles.newsContainer}>
                    News
                        <img src='img/logo.png' style={{ width: '200px' }} />
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

export default connect()(DebugDetailedPanel)