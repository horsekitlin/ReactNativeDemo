/**
 * @flow
 */
import _ from 'lodash';
import * as ActionTypes from '../constants/ActionTypes';
import createReducer from '../utils/createReducer';
import SessionManager from '../utils/sessionManager';

SessionManager.init();

const initialState = {url: '/', navKey: null, isReplace: false, isBack: false};
let prevRoutes = ['/main'];

const history = {};

export default createReducer(initialState, {
  [ActionTypes.ROUTE_CHANGE](state, action) {
    if(!_.isUndefined(action.key) && action.key > -1){
        SessionManager.pushRoute({
            route: action.url,
            key: action.key
        });
    }

    return Object.assign({}, state, {url: action.url, navKey: action.navKey, isReplace: false, isBack: false});
  },
  [ActionTypes.ROUTE_REPLACE](state, action) {
    return Object.assign({}, state, {url: action.url, navKey: action.navKey, isReplace: true, isBack: false});
  },
  [ActionTypes.ROUTE_BACK](state, action) {
    let url = SessionManager.popRoute();
    return Object.assign({}, state, {url: url.route, navKey: action.navKey, isReplace: false, isBack: true});
  }
});
