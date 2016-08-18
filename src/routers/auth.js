/**
 * @flow
 */
import React from 'react'; // eslint-disable-line no-unused-vars
import RouteBase from './base';
import LoginScene from '../containers/LoginScene';


export class RouteAuthLogin extends RouteBase {
  static PATTERN = '/auth/login/:?query:';

  renderScene(navigator, query) {
      console.log(query);
    return (
      <LoginScene
        navigator={navigator}
      />
    );
  }
}
