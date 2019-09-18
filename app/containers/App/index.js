import React from 'react';
import { StyleSheet, ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import dispatchToProps from './dispatch-to-props';

class App extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userData = await this.props.getUserData();
        this.props.navigation.navigate(userData ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

function mapStateToProps(state) {
    const { isLoggedIn } = state.appContainer;
    return { isLoggedIn: isLoggedIn }
}

export default connect(mapStateToProps, dispatchToProps)(App);