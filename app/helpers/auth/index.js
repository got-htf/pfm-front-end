import { AsyncStorage } from 'react-native';
import { STORAGE_KEY } from "../../config/storage-config";

export const storeToken = async (user) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY.USER_DATA, JSON.stringify(user));
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

export const getToken = async () => {
    try {
        let userData = await AsyncStorage.getItem(STORAGE_KEY.USER_DATA);
        return JSON.parse(userData);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

import  { Linking } from 'react-native';

export const removeUserData = async () => {
    try {
        // await AsyncStorage.removeItem(STORAGE_KEY.USER_DATA);
        Linking.addEventListener('url', handleUrl)
        function handleUrl(event) {
            console.log(event.url);
            Linking.removeEventListener('url', handleUrl)
        }
        Linking.openURL([
            'https://www.dropbox.com/1/oauth2/authorize',
            '?response_type=token',
            '&client_id=ut7ybtkscagchnk',
            '&redirect_uri=gothtf://callback'
        ].join(''))
    } catch (error) {
        console.log("Something went wrong", error);
    }
}