/**
 * @flow
 */
import React from 'react'; // eslint-disable-line no-unused-vars
import RouteBase from './base';
import FirstScene from '../containers/FirstScene';

export class FirstRoute extends RouteBase {
  static PATTERN = '/first/:?query:';

  renderScene(navigator, query) {
    return (
      <FirstScene
        navigator={navigator}/>
    );
  }
}
