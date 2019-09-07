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

export default class Login extends Component {
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

        <Form type="Login" />
        <LoginButton onLoginFinished={(error, result) => this.onLoginFinished(error, result)}/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet?</Text>

          <TouchableOpacity>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};