/*
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onLeft = this.onLeft.bind(this);
    this.onActionSelected = this.onActionSelected.bind(this);
    if (!props.renderTitleComponent || !props.renderRightButtonsComponent) {
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    title: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.object),
    onLeft: PropTypes.func,
    onActionSelected: PropTypes.func,
    renderLeftButtonComponent: PropTypes.func,
    renderTitleComponent: PropTypes.func,
    renderRightButtonsComponent: PropTypes.func,
  };

  static defaultProps = {
    title: 'Default Title',
    actions: null,
  };

  onLeft() {
    if (this.props.onLeft) {
      this.props.onLeft();
    }
    this.props.navigator.pop();
  }

  onActionSelected(i) {
    if (this.props.onActionSelected) {
      this.props.onActionSelected(i);
    }
  }
  _renderTitle() {
    if (this.props.renderTitleComponent) {
      let component = this.props.renderTitleComponent();
      return React.cloneElement(component, {
        style: [styles.titleContainer, component.props.style],
      });
    }
    return (
      <Text style={[styles.titleContainer, styles.title]}>
        {this.props.title}
      </Text>
    );
  }

  _renderLeftButton() {
    if (this.props.renderLeftButtonComponent) {
      let component = this.props.renderLeftButtonComponent();
      return React.cloneElement(component, {
        style: [styles.leftButtonContainer, component.props.style],
      });
    }

    // FIXME:
    if (this.props.navigator.__navigator.state.routeStack.length <= 1) {
      return <View style={styles.leftButtonContainer} />;
    }

    return (
      <TouchableWithoutFeedback onPress={this.onLeft}>
        <View style={styles.leftButtonContainer}>
          <Icon
            name="chevron-left"
            size={20}
            color="#ffffff"
            style={styles.leftButton}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _renderActionView(title, icon) {
    if (icon) {
      return <Image style={styles.actionViewImage} source={icon} />;
    } else if (title) {
      return <Text style={styles.actionViewText}>{title}</Text>;
    } else {
      return <View />;
    }
  }

  _renderRightButtons() {
    if (this.props.renderRightButtonsComponent) {
      let component = this.props.renderRightButtonsComponent();
      return React.cloneElement(component, {
        style: [styles.rightButtonsContainer, component.props.style],
      });
    }

    if (!this.props.actions || this.props.actions.length === 0) { return <View style={styles.rightButtonsContainer} />; }
    return (
      <View style={styles.rightButtonsContainer}>
        {this.props.actions.map((action, i) => {
          let {title, icon} = action;
          return (
            <TouchableOpacity
              key={i}
              onPress={this.onActionSelected}>
              {this._renderActionView(title, icon)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  _platformStyleFactory(prefix) {
    if (Platform.OS === 'android') {
      return styles[prefix + 'Android'];
    } else if (Platform.OS === 'ios') {
      return styles[prefix + 'IOS'];
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={[styles.navBarContainer, this._platformStyleFactory('navBarContainer')]}>
        <StatusBar barStyle="light-content" animated={false} />
        <View style={[styles.navBar, this._platformStyleFactory('navBar')]}>
          {this._renderLeftButton()}
          {this._renderTitle()}
          {this._renderRightButtons()}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: '#00a5e6',
  },
  navBarContainerIOS: {
    paddingTop: 20,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarIOS: {
    height: 44,
  },
  navBarAndroid: {
    height: 56,
  },
  titleContainer: {
    flex: 4,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 18,
  },
  leftButtonContainer: {
    flex: 1,
    height: 44,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  leftButton: {
  },
  rightButtonsContainer: {
    flex: 1,
    height: 44,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionViewText: {
    fontSize: 16,
    color: '#fff',
  },
  actionViewImage: {
  },
});
