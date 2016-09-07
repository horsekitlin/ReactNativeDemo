/**
 * @flow
 */
import { AsyncStorage } from 'react-native';
import * as StorageKeys from '../constants/StorageKeys';


var g_cache = null;

class SessionManager {
  init() {
    if (g_cache === null) {
      return AsyncStorage.getItem(StorageKeys.SESSION_MANAGER)
        .then(data => {
            if(data === null){
                this.getDefaultCache();
                return this.updasteHistory();
            }else{
                let dataObj = JSON.parse(data);
                this._fillCache(dataObj);
            }

        })
        .then(() => {
          return Promise.resolve(true);
        })
        .catch(() => {
          return Promise.resolve(true);
        });

    } else {
      return Promise.resolve(true);
    }
  }

  get prevRoutes() {
    return g_cache && g_cache.prevRoutes;
  }

  getDefaultCache(){
      this._fillCache({
          prevRoutes: [{
              route: '/main',
              key: '-1'
          }]
      });
  }

  pushRoute(route: Object){
      if(g_cache === null){
          this.getDefaultCache();
      }
      g_cache.prevRoutes.push(route);
      return AsyncStorage.setItem(StorageKeys.SESSION_MANAGER, JSON.stringify(g_cache));
  }

  popRoute(){
      const url = g_cache.prevRoutes.pop();
      this.updasteHistory();
      return url;
  }

  updasteHistory(){
      return AsyncStorage.setItem(StorageKeys.SESSION_MANAGER, JSON.stringify(g_cache));
  }

  _fillCache(data) {
    g_cache = {
      prevRoutes: data.prevRoutes
    };
  }

  cleanup() {
    g_cache = null;
    return AsyncStorage.removeItem(StorageKeys.SESSION_MANAGER);
  }
}

// Simple Singleton
export default new SessionManager();
