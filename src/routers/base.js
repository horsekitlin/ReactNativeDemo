/**
 * @flow
 */
import {
  Navigator,
  Platform,
} from 'react-native';


export default class RouteBase {
  getExRoute(routeParams) {
    let self = this;
    return {
      renderScene(navigator) {
        return self.renderScene(navigator, routeParams);
      },
      configureScene() {
        if (Platform.OS === 'android') {
          return Navigator.SceneConfigs.FadeAndroid;
        } else {
          return Navigator.SceneConfigs.FloatFromRight;
        }
      },
      getTitle() {
        return routeParams && routeParams.navTitle || 'Default Title';
      },
      onWillBlur(event) {
        let component = this.scene;
        if (component.getWrappedInstance) {
          component = component.getWrappedInstance();
        }
        if (component.componentWillBlur) {
          component.componentWillBlur();
        }
      },
      onDidFocus(event) {
        let component = this.scene;
        if (component.getWrappedInstance) {
          component = component.getWrappedInstance();
        }
        if (component.componentDidFocus) {
          component.componentDidFocus();
        }
      },
      isHomeRoute: self.isHomeRoute,
    };
  }
}
