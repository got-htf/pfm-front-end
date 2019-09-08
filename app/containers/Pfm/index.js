import React, { Component } from 'react';
import { View , Text} from 'react-native';


export default class Pfm extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
        <Text>Personal financial management screen!</Text>
      </View>
    );
  }
}