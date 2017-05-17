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


// Container for all pages, handles page navigation
export const Debug = () => {
    return (
        <div >
            <AppBar
                title="Robinhood-Electron"
                iconElementLeft={<img style={styles.icon} src='img/logo.png' />}
            />
            <Drawer containerStyle={styles.leftNavContainer}>
                <Card containerStyle={styles.userCard}>
                    <CardHeader
                        title={<b>Hi! Debug Bug</b>}
                        subtitle="Username: bbuugg"
                        actAsExpander={false}
                        showExpandableButton={false}
                        style={styles.userCardHeader}
                    />
                    <CardText expandable={false} style={styles.userCardText}>
                        <h3>PORTFOLIO VALUE</h3>
                        $12,000
                        <h3> BUYING POWER </h3>
                        $2,000
                    </CardText>
                    <Divider />
                </Card>
                <List style={styles.stocksList}>
                    <StockListItem
                        symbol='BRK.B'
                        price={123}
                        shares={12}
                        value={233333}
                        percent={1.22} />
                    <StockListItem
                        symbol='BRK.A'
                        price={233}
                        shares={42}
                        value={2333}
                        percent={-1.23} />
                    <StockListItem
                        symbol='SMHHHH'
                        price={233}
                        shares={42}
                        value={2333}
                        percent={0} />
                    <StockListItem
                        symbol='MEHHHH'
                        price={111}
                        shares={666}
                        value={2333}
                        percent={-999.99} />
                </List>
            </Drawer>
            <Grid fluid>
                <Row style={styles.rightContent}>
                    Debug text
                </Row>
            </Grid>
        </div >
    )
}

const styles = {
    userCard: {
        position: 'absolute'
    },
    userCardHeader: {
        paddingBottom: '0px'
    },
    userCardText: {
        paddingTop: '1px'
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
        marginTop: '235px',
        overflowY: 'auto',
        padding: '0px',
        height: 'calc(100% - 235px)'
    },
    icon: {
        width: 32,
        marginLeft: 16,
        marginRight: 16
    },
}

export default connect()(Debug)