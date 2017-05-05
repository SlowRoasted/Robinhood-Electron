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

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const { ipcRenderer, shell } = electron;
const { dialog } = electron.remote;



export const App = () => {

    // this.state = {
    //     userName: null,
    //     password: null
    // };
    const _handleLogin = () => {
        let options = {
            type: 'info',
            buttons: ['确定'],
            title: '登录',
            message: "this.state.userName",
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
        <div style={styles.root}>
            {/*<img style={styles.icon} src='public/img/app-icon.png' />*/}

            <TextField
                hintText='Enter your username'
                value="{this.state.userName}" />
            <TextField
                hintText='Enter your password'
                type='password'
                value="{this.state.password}" />

            <div style={styles.buttons_container}>
                <RaisedButton
                    label="Login" primary={true}
                    onClick={_handleLogin} />
            </div>
        </div>
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
        width: 100,
        height: 100,
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
    }
)(App)