/**
 * @flow
 */
import React from 'react';
import RouteBase from './base';
import EntryScene from '../containers/EntryScene';
import TopicScene from '../containers/TopicScene';


export class RouteEntry extends RouteBase {
  static PATTERN = '/:?query:';

  renderScene(navigator, query) {
    return (
      <EntryScene
        navigator={navigator}/>
    );
  }

  // Special flag for Android back button to exit app
  get isHomeRoute() {
    return true;
  }
}


export class RouteHome extends RouteBase {
  static PATTERN = '/main/:?query:';

  renderScene(navigator, query) {
    return (
      <TopicScene
        navigator={navigator} />
    );
  }

  // Special flag for Android back button to exit app
  get isHomeRoute() {
    return true;
  }
}
