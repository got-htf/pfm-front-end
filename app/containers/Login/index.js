import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { styles } from './style';
import Logo from '../../components/Logo';
import Form from '../../components/Form';

import {
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { connect } from 'react-redux';
import { TYPES } from './action-types';
import dispatchToProps from './dispatch-to-props';

export class Login extends Component {

  login(id) {
    this.props.testAction(id);
  }

  handleFacebookLoginSuccess(fbToken) {
    // Code logic to store user
    this.props.navigation.navigate('App');
  }

  onLoginFinished = (error, result) => {
    if (error) {
      console.log("login has error: " + result.error);
    } else if (result.isCancelled) {
      console.log("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          console.log(data.accessToken.toString());
          
          
        }
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />

        <Form type="Login" onFbLoginsuccess={(fbToken) => this.handleFacebookLoginSuccess(fbToken)} />
        <LoginButton onLoginFinished={(error, result) => this.onLoginFinished(error, result)}/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet?</Text>

          <TouchableOpacity onPress={() => this.login(11)}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const testAction = (id) => {
  console.log("Come here: aaaaaaaaaaa" + id);
  return (dispatch) => {
    console.log(dispatch);
    dispatch({
      type: TYPES.LOGIN
    });
  }
}

const mapDispatchToProps = {
  testAction
}

export default connect(null, dispatchToProps)(Login);