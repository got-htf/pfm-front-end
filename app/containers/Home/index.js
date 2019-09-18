import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { Button } from 'native-base';
import { storeToken, removeUserData } from '../../helpers/auth';



export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen!</Text>
        <Button onPress={() => {removeUserData()}}><Text>Logout</Text></Button>
      </View>
    );
  }
}