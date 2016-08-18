/**
 * @flow
 */
import { AsyncStorage } from 'react-native';
import * as StorageKeys from '../constants/StorageKeys';


var g_cache = null;

class SessionManager {
  init() {
    if (g_cache == null) {
      return AsyncStorage.getItem(StorageKeys.SESSION_MANAGER)
        .then(data => {
          let dataObj = JSON.parse(data);
          this._fillCache(dataObj);
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

  get acn() {
    return g_cache && g_cache.acn;
  }

  get sessionToken() {
    return g_cache && g_cache.sessionToken;
  }

  get wnsServer() {
    return g_cache && g_cache.wnsServer;
  }

  get ssn() {
    return g_cache && g_cache.ssn;
  }

  get sun() {
    return g_cache && g_cache.sun;
  }

  _fillCache(data) {
    let {accountData, sessionToken} = data;
    g_cache = {
      acn: accountData.acn,
      ssn: accountData.ssn,
      sun: accountData.sun,
      wnsServer: `http://${accountData.wns_ip}:${accountData.wns_port}`,
      sessionToken: sessionToken,
    };
  }

  update(accountData, sessionToken) {
    let data = {
      accountData: accountData,
      sessionToken: sessionToken,
    };
    this._fillCache(data);
    return AsyncStorage.setItem(StorageKeys.SESSION_MANAGER, JSON.stringify(data));
  }

  cleanup() {
    g_cache = null;
    return AsyncStorage.removeItem(StorageKeys.SESSION_MANAGER);
  }
}

// Simple Singleton
export default new SessionManager();
