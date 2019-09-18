import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import { AppContainer } from './app/router';

const PfmApp = () => {
  return (
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
  );
};


export default PfmApp;
