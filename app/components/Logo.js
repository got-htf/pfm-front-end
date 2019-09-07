import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-pulse' size={40} color='orange' />
        <Text style={styles.logoText}>Personal Financial Management</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    justifyContent: "flex-end",

    alignItems: "center"
  },

  logoText: {
    marginVertical: 15,

    fontSize: 18,

    color: "rgba(255, 255, 255, 0.7)"
  }
});
