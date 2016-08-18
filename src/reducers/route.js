/**
 * @flow
 */
import * as ActionTypes from '../constants/ActionTypes';
import createReducer from '../utils/createReducer';

const initialState = {url: '/', navKey: null, isReplace: false, isBack: false};
let prevRoutes = ['/main'];


export default createReducer(initialState, {
  [ActionTypes.ROUTE_CHANGE](state, action) {
    prevRoutes.push(state.url);
    return Object.assign({}, state, {url: action.url, navKey: action.navKey, isReplace: false, isBack: false});
  },
  [ActionTypes.ROUTE_REPLACE](state, action) {
    return Object.assign({}, state, {url: action.url, navKey: action.navKey, isReplace: true, isBack: false});
  },
  [ActionTypes.ROUTE_BACK](state, action) {
    let url = prevRoutes.pop();
    return Object.assign({}, state, {url: url, navKey: action.navKey, isReplace: false, isBack: true});
  }
});
