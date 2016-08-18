/**
 * @flow
 */
import AppRouter from '../routers/index';

export function navigatorAction(navigator, route) {
  if (navigator.props.navKey !== route.navKey) { return; }
  if (route.isBack) {
    if (navigator.getCurrentRoutes().length <= 1) {
      navigator.replace(AppRouter.getExRoute(route.url));
    } else {
      navigator.pop();
    }
  } else if (route.isReplace) {
    navigator.resetTo(AppRouter.getExRoute(route.url));
  } else {
    navigator.push(AppRouter.getExRoute(route.url));
  }
}
