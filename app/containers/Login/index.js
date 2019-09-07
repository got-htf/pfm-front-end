import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Container } from 'native-base';

export default class Login extends Component {
  onLoginFinished = (error, result) => {
    
  }
  render() {
    return (
      <Container style={{paddingTop: 100, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")}/>
        </View>
      </Container>
    );
  }
};