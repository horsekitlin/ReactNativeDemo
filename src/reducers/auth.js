/**
 * @flow
 */
import * as ActionTypes from '../constants/ActionTypes';
import createReducer from '../utils/createReducer';

const initialState = {};

export default createReducer(initialState, {
  [ActionTypes.LOGIN_REQUEST](state, action) {
    return {action: 'login', success: false, isFetching: true};
  },
  [ActionTypes.LOGIN_RECEIVED](state, action) {
    return {action: 'login', success: action.success, isFetching: false, errorText: action.errorText};
  },
  [ActionTypes.LOGOUT_RECEIVED](state, action) {
    return {action: 'logout', success: action.success};
  },
  [ActionTypes.CHECK_APP_SESSION_STATE](state, action) {
    return {action: 'checkAppSessionState', appSessionState: action.state};
  }
});
