/**
 * @flow
 */
import crossroads from 'crossroads';
import {
  RouteEntry,
  RouteHome,
  RouteLogs,
} from './home';
import {
    RouteDay1,
    RouteDay2,
    RouteDay3,
    RouteDay4,
    RouteDay5,
    RouteDay6,
    RouteDay7,
    RouteDay8,
    RouteDay9,
    RouteDay10,
    RouteDay11,
    RouteDay12,
    RouteDay13,
    RouteDay14,
    RouteDay15,
    RouteDay16,
    RouteDay17,
    RouteDay18,
    RouteDay19,
    RouteDay20,
    RouteDay21,
    RouteDay22,
    RouteDay23,
    RouteDay24,
    RouteDay25,
    RouteDay26,
    RouteDay27,
    RouteDay28,
    RouteDay29,
    RouteDay30,


} from './topics';

class AppRouter {
  constructor() {
    this._crossroadsRouteMatched = this._crossroadsRouteMatched.bind(this);

    [
      RouteEntry,
      RouteHome,
      RouteLogs,
      RouteDay1,
      RouteDay2,
      RouteDay3,
      RouteDay4,
      RouteDay5,
      RouteDay6,
      RouteDay7,
      RouteDay8,
      RouteDay9,
      RouteDay10,
      RouteDay11,
      RouteDay12,
      RouteDay13,
      RouteDay14,
      RouteDay15,
      RouteDay16,
      RouteDay17,
      RouteDay18,
      RouteDay19,
      RouteDay20,
      RouteDay21,
      RouteDay22,
      RouteDay23,
      RouteDay24,
      RouteDay25,
      RouteDay26,
      RouteDay27,
      RouteDay28,
      RouteDay29,
      RouteDay30,
    ].forEach(RouteClass => {
      let routeInstance = new RouteClass();
      let crossroadsRoute = crossroads.addRoute(RouteClass.PATTERN);
      crossroadsRoute._appRoute = routeInstance;
    });

    crossroads.routed.add(this._crossroadsRouteMatched);
  }

  _crossroadsRouteMatched(request, data) {
    let params = data.params[0];
    this._currentRoute = data.route._appRoute;
    this._currentParams = params;
  }

  getExRoute(route) {
    crossroads.parse(route);
    return this._currentRoute.getExRoute(this._currentParams);
  }

}

export default new AppRouter();
