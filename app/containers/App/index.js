import React from 'react';
import { AppContainer, StackWithLogin } from '../../router';
export default class App extends React.Component {
    isLoggedIn = () => {
        // Implement logic to check if user has been loggedin
        return false;
    }
    render() {
        if (this.isLoggedIn()) {
            return (
                <AppContainer/>
            )
        } else {
            return (
                <StackWithLogin/>
            )
        }
    }
}