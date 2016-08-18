/**
 * @flow
 */
import React from 'react';
import RouteBase from './base';
import EntryScene from '../containers/EntryScene';
import HomeScene from '../containers/HomeScene';


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
    let tabIndex = 0;
    if (query) {
      if (query.tabIndex) {
        tabIndex = +query.tabIndex;
      }
    }
    return (
      <HomeScene
        navigator={navigator}
        tabIndex={tabIndex}/>
    );
  }

  // Special flag for Android back button to exit app
  get isHomeRoute() {
    return true;
  }
}
