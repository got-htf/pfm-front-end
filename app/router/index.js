import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bottomTabScreen } from './screens';
import Start from '../containers/Start';
import { Login } from '../containers/Login';

const getIconName = (routeName, focused) => {
    switch (routeName) {
        case 'Home':
            return `ios-home`;
        case 'Activities':
            return `ios-pulse`;
        case 'Dashboard':
            return `ios-podium`;
        case 'Pfm':
            return `ios-paw`;
        case 'More': 
            return `ios-apps`;
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

const appStack = createStackNavigator({
    Start: {
        screen: Start
    },
    Login: {
        screen: Login
    },
    App: {
        screen: AppContainer
    }
},
    {
        initialRouteName: 'Start',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export const StackWithLogin = createAppContainer(appStack);