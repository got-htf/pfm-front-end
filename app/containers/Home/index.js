import React, { Component } from 'react';
import { View , Text, Linking} from 'react-native';
import { Button } from 'native-base';
import { storeToken, removeUserData } from '../../helpers/auth';



export default class Home extends React.Component {
  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen!</Text>
        <Button onPress={() => {removeUserData()}}><Text>Logout</Text></Button>
      </View>
    );
  }
}