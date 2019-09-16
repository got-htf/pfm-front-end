import React from 'react';
import Login from '../Login';
import { AppContainer } from '../../router';

import { connect } from 'react-redux';
import dispatchToProps from './dispatch-to-props';

class App extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        const { isLoggedIn } = this.props;
        if (isLoggedIn) {
            return (
                <AppContainer/>
            )
        } else {
            return (
                <Login></Login>
            )
        }
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.appContainer;
    return { isLoggedIn: isLoggedIn }
}

export default connect(mapStateToProps, dispatchToProps)(App);