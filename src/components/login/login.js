/*
 * Editted from code by the author below.
 * Copyright (C) 2016. All Rights Reserved.
 *
 * @author  Arno Zhang
 * @email   zyfgood12@163.com
 * @date    2016/06/22
 */

'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress';

import PropTypes from 'prop-types'
import { ActionTypes } from '../../actions'
import { testLogin } from './loginActions'

// Login UI, this is the first page at app launch.
export const Login = ({ username, password, updateUsername, updatePassword,
    login, usernameErrorText, passwordErrorText, updateUsernameErrorText,
    updatePasswordErrorText, clearInputs, loading }) => {

    const _login = () => {
        if (username == '') {
            updateUsernameErrorText('Username is required')
        }
        else {
            updateUsernameErrorText('')
        }
        if (password == '') {
            updatePasswordErrorText('Password is required')
        }
        else {
            updatePasswordErrorText('')
        }
        if (username != '' && password != '') {
            login(username, password)
        }
    }

    // Create shortcut to call login when "Enter" is pressed
    const submitOnEnterPress = (e) => {
        var event = e || window.event;
        var charCode = event.which || event.keyCode;

        if (charCode == '13') {
            // Enter pressed
            _login()
        }
    }


    return (
        <div style={styles.root} className='robinhood-color'>
            <img style={styles.icon} src='img/logo.png' />
            <h2>Robinhood-Electron</h2>
            <h3>UNOFFICIAL desktop client for Robinhood</h3>
            <br />
            <TextField
                hintText='Enter your username'
                value={username}
                floatingLabelText='Username'
                onChange={updateUsername.bind(this)}
                errorText={usernameErrorText} />
            <TextField
                hintText='Enter your password'
                type='password'
                floatingLabelText='Password'
                value={password}
                onChange={updatePassword.bind(this)}
                errorText={passwordErrorText}
                onKeyPress={submitOnEnterPress.bind(this)} />
            <div style={styles.buttons_container}>
                <RaisedButton
                    label="Login" primary={true} onClick={_login} />
                <RaisedButton
                    label="Clear" primary={false} style={{ marginLeft: 60 }}
                    onClick={clearInputs} />
            </div>
            {/*show a full screen loading circular progress after user clickes login*/}
            {loading &&
                (<div style={styles.loadingBackground}>
                    <div style={styles.loadingContainer}>
                        <CircularProgress size={60} thickness={5}
                            style={styles.loadingWheel} />
                    </div>
                </div>)}
        </div >
    )
}

const propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    updateUsername: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    usernameErrorText: PropTypes.string.isRequired,
    passwordErrorText: PropTypes.string.isRequired,
    updateUsernameErrorText: PropTypes.func.isRequired,
    updatePasswordErrorText: PropTypes.func.isRequired,
    clearInputs: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
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
    },
    loadingBackground: {
        position: 'absolute',
        display: 'table',
        width: '100%',
        height: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(52, 52, 52, .7)',
        textAlign: 'center',
    },
    loadingContainer: {
        display: 'table-cell',
        verticalAlign: 'middle'

    },
    loadingWheel: {
        zIndex: 1000,
    }
}

export default connect(
    (state) => {
        return {
            username: state.login.username,
            password: state.login.password,
            usernameErrorText: state.login.usernameErrorText,
            passwordErrorText: state.login.passwordErrorText,
            loading: state.login.loading
        }
    },
    (dispatch) => {
        return {
            updateUsername: (event) => dispatch({
                type: ActionTypes.UPDATE_USERNAME,
                username: event.target.value
            }),
            updatePassword: (event) => dispatch({
                type: ActionTypes.UPDATE_PASSWORD,
                password: event.target.value
            }),
            login: (username, password) =>
                dispatch(testLogin(username, password)),
            updateUsernameErrorText: (text) => dispatch({
                type: ActionTypes.UPDATE_USERNAME_ERROR,
                error: text
            }),
            updatePasswordErrorText: (text) => dispatch({
                type: ActionTypes.UPDATE_PASSWORD_ERROR,
                error: text
            }),
            clearInputs: () => dispatch({
                type: ActionTypes.CLEAR_LOGIN_INPUTS
            })
        }
    }
)(Login)