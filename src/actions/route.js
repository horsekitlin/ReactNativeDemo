/**
 * @flow
 */
import * as ActionTypes from '../constants/ActionTypes';


export function changeRoute(url: string, navKey: string): {type: string, url: string} {
  return {
    type: ActionTypes.ROUTE_CHANGE,
    url,
    navKey,
  };
}

export function replaceRoute(url: string, navKey: string): {type: string, url: string} {
  return {
    type: ActionTypes.ROUTE_REPLACE,
    url,
    navKey,
  };
}

export function backRoute(navKey: string): {type: string} {
  return {
    type: ActionTypes.ROUTE_BACK,
    navKey,
  };
}
