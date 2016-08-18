/**
 * @flow
 */
import React from 'react';
import {
    Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { replaceRoute } from '../actions/route';
import { checkAppSessionState } from '../actions/auth';
import AppSessionState from '../constants/AppSessionState';


class EntryScene extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        //check login state
        this.props.dispatch(replaceRoute('/auth/login', this.props.navigator.props.navKey));
    }


    componentWillReceiveProps(nextProps) {
     const {auth} = nextProps;
     this.props.dispatch(replaceRoute('/auth/login', this.props.navigator.props.navKey));
   }


  _getRouteWithDeepLink() {

    const DEFAULT_ROUTE = '/main';
    return Linking.getInitialURL().then(url => {
      // FIXME: Add DeepLink guard
      let route = DEFAULT_ROUTE;
      if (url) {
        route = url.substr(10);
        if (!route || route === '/') {
          route = DEFAULT_ROUTE;
        }
      }
      return route;
    });
  }

  render() {
    return null;
  }
}


function mapStateToProps(state) {
  const {auth} = state;

  return {
    auth
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(EntryScene);
