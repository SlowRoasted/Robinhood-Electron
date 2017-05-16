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


// Container for all pages, handles page navigation
export const Debug = () => {
    return (
        <div >
            <AppBar
                title="Robinhood-Electron"
                showMenuIconButton={false}
            />
            <Drawer containerStyle={styles.leftNavContainer}
                style={styles.leftNav}>
                <Card containerStyle={styles.userCard}>
                    <CardHeader
                        title="Hi! Debug Bug"
                        subtitle="Username: bbuugg"
                        actAsExpander={false}
                        showExpandableButton={false}
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
                    <ListItem
                        primaryText="Stock1" />
                    <ListItem
                        primaryText="Stock2" />
                    <ListItem
                        primaryText="Stock3" />
                    <ListItem
                        primaryText="Stock4" />
                    <ListItem
                        primaryText="Stock1" />
                    <ListItem
                        primaryText="Stock2" />
                    <ListItem
                        primaryText="Stock3" />
                    <ListItem
                        primaryText="Stock4" />
                    <ListItem
                        primaryText="Stock1" />
                    <ListItem
                        primaryText="Stock2" />
                    <ListItem
                        primaryText="Stock3" />
                    <ListItem
                        primaryText="Stock4" />
                    <ListItem
                        primaryText="Stock1" />
                    <ListItem
                        primaryText="Stock2" />
                    <ListItem
                        primaryText="Stock3" />
                    <ListItem
                        primaryText="Stock4" />
                    <ListItem
                        primaryText="Stock1" />
                    <ListItem
                        primaryText="Stock2" />
                    <ListItem
                        primaryText="Stock3" />
                    <ListItem
                        primaryText="Stock4" />
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
        overflow: 'hidden'
    },
    leftNav: {
    },
    rightContent: {
        paddingLeft: '256px'
    },
    stocksList: {
        marginTop: '235px',
        height: '800px',
        overflowY: 'auto'
    }
}

export default connect()(Debug)