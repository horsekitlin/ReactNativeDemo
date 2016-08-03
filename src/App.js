/**
    @flow
*/
import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
