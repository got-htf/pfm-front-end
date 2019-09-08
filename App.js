import React from 'react';
import App from './app/containers/App';
import {Provider} from 'react-redux';
import store from './app/redux/store';

const PfmApp = () => {
  return (
    <Provider store = {store}>
      <App/>
    </Provider>
  );
};


export default PfmApp;
