/**
 * @flow
 */
import * as ActionTypes from '../constants/ActionTypes';
import AppSessionState from '../constants/AppSessionState';
import SessionManager from '../utils/sessionManager';



export function login(account: string, password: string): Function {
  return (dispatch, getState) => {
    let params = {
      acn: account,
      pwd: password,
    };
    dispatch({type: ActionTypes.LOGIN_REQUEST});

    setTimeout(function(){
        dispatch({
        type: ActionTypes.LOGIN_RECEIVED,
        success: true,
        errorText: '',
    })
    }, 3000);

  };
}

export function logout(): Function {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.LOGOUT_REQUEST});
    // logout success
    dispatch({type: ActionTypes.LOGOUT_RECEIVED, success: true});
  };
}
