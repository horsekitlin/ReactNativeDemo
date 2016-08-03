/**
    @flow
*/
import React from 'react';
import {
    Platform,
    BackAndroid,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
//import ExNavigator from '@exponent/react-native-navigator';
//import { backRoute } from './actions/route';
//import { navigatorAction } from './utils/navigatorHelper';
//import AppRouter from './routers/index';

import Home from './containers/Home';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
/*
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        let currentRoute = this._exNavigator.navigationContext.currentRoute;
        if (currentRoute.isHomeRoute) {
          return false;
        } else if (currentRoute.scene &&
                   currentRoute.scene.props.hasNavBack === false) {
          return false;
        } else {
          this.props.dispatch(backRoute(this._exNavigator.props.navKey));
          return true;
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.route !== nextProps.route) {
      navigatorAction(this._exNavigator, nextProps.route);
    }
  }
*/
  render() {
    //let initialRoute = AppRouter.getExRoute(this.props.route.url);
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function mapStateToProps(state) {
    return state;
    /*
  const {route} = state;

  return {
    route
  };
  */
}

export default connect(mapStateToProps)(Root);
