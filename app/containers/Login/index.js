import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import { styles } from './style';
import Logo from '../../components/Logo';
import Form from '../../components/Form';

import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from "react-native";

import { connect } from 'react-redux';
import { handleFacebookLogin } from './dispatch-to-props';
import { is } from '@babel/types';

class Login extends React.Component {

  /**
   * Login Facebook
   */
  loginFacebook = async () => {
    const response = await this.props.handleFacebookLogin();

    if (response) {
      this.props.navigation.navigate('App');
    }
  }

  render() {

    const { isAuthenticating } = this.props;
    if (isAuthenticating) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" 
          onFacebookLoginButtonPressed={() => this.loginFacebook()}/>
        <LoginButton/>
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

function mapStateToProps(state) {
  const { isAuthenticating } = state.login;
  return { isAuthenticating: isAuthenticating }
}

export default connect(mapStateToProps, {
  handleFacebookLogin: handleFacebookLogin
})(Login);