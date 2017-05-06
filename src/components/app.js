/*
 * Copyright (C) 2016. All Rights Reserved.
 *
 * @author  Arno Zhang
 * @email   zyfgood12@163.com
 * @date    2016/06/22
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');
const robinhoodGreen = '#21ce99';
const electron = window.require('electron');
const { ipcRenderer, shell } = electron;
const { dialog } = electron.remote;

let muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        textColor: robinhoodGreen,
        primary1Color: robinhoodGreen,
        accent1Color: robinhoodGreen,
    },
});


export const App = () => {
    let username;
    let password;
    const _handleLogin = () => {
        console.log(username);
        let options = {
            type: 'info',
            buttons: ['Ok'],
            title: 'Login Test',
            message: `${username.getValue()}: ${password.getValue()}`,
            defaultId: 0,
            cancelId: 0
        };

        dialog.showMessageBox(options, (response) => {
            if (response == 0) {
                console.log('OK pressed!');
            }
        });
    }


    return (
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <div style={styles.root} className='robinhood-color'>
                <img style={styles.icon} src='img/doge.png' />
                <h2>Robinhood-Electron</h2>
                <h3>UNOFFICIAL desktop client for Robinhood</h3>
                <br/>
                <TextField
                    hintText='Enter your username'
                    ref={(node) => username = node} />
                <TextField
                    hintText='Enter your password'
                    type='password'
                    ref={(node) => password = node} />
                <div style={styles.buttons_container}>
                    <RaisedButton
                        label="Login" primary={true}
                        onClick={_handleLogin} />
                    <RaisedButton
                        label="Clear" primary={false} style={{ marginLeft: 60 }}
                        onClick={_handleLogin} />
                </div>
            </div>
        </MuiThemeProvider>
    );


}

const styles = {
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 150,
        marginBottom: 40
    },
    buttons_container: {
        paddingTop: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {

        }
    }
)(App)