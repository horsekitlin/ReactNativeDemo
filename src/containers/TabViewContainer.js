/**
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
  Platform,
  BackAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';
import { backRoute } from '../actions/route';
import { navigatorAction } from '../utils/navigatorHelper';
import AppRouter from '../routers/index';


class FilesTabView extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    navKey: PropTypes.string.isRequired,
    initialRouteUrl: PropTypes.string.isRequired,
  };

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

  render() {
    let initialRoute = AppRouter.getExRoute(this.props.initialRouteUrl);
    return (
      <ExNavigator
        initialRoute={initialRoute}
        navKey={this.props.navKey}
        navigator={this.props.navigator}
        showNavigationBar={false}
        ref={(exNavigator) => { this._exNavigator = exNavigator; }}
      />
    );
  }

}


function mapStateToProps(state) {
  const {route} = state;

  return {
    route
  };
}

export default connect(mapStateToProps)(FilesTabView);
