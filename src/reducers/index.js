/**
 * @flow
 */
import { combineReducers } from 'redux';
import route from './route';
import auth from './auth';

const rootReducer = combineReducers({
    route,
    auth,
});

export default rootReducer;
