import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bottomTabScreen } from './screens';
import Login, { MyAuth } from '../containers/Login';
import App from '../containers/App';
import { View, Text } from 'native-base';

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

// const AppContainer = createAppContainer(TabNavigator);

const AuthStack = createStackNavigator({ Login: Login });
const AppStack = createStackNavigator({Home: TabNavigator});



export const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Bootstrap: App,
        App: AppStack,
        Auth: Login,
    },
    {
        initialRouteName: 'Bootstrap',
    }
));


