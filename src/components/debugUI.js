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
            />
            <Grid fluid style={styles.grid}>

                <Drawer>
                    <Card>
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
                    </Card>
                    <List>
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

                <Row>
                    <Col xs={8} md={9} style={styles.wrapText}>
                        <p>
                            Debug text
                    </p>
                    </Col>
                </Row>
            </Grid>
        </div >
    )
}

const styles = {
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
    leftNav: {
        wordWrap: 'break-word'
    }
}

export default connect()(Debug)