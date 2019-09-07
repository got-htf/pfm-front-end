import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bottomTabScreen } from './screens';

const getIconName = (routeName, focused) => {
    switch(routeName) {
        case 'Home':
            return `ios-home`;
        case 'Activities':
            return `ios-pulse`;
        case 'Dashboard':
            return `ios-podium`;
        default:
            return ``;
    }
}

const TabNavigator = createBottomTabNavigator(
    bottomTabScreen,
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          return <IconComponent name={getIconName(routeName, focused)} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );
  
  export const AppContainer = createAppContainer(TabNavigator);