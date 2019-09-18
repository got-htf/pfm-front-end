import {AsyncStorage} from 'react-native';
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

export const removeUserData = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY.USER_DATA);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}