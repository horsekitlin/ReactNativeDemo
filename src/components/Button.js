/*
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import RNButton from 'react-native-button';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    renderContainerComponent: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    renderContainerComponent: () => <View />,
  };

  _renderContent() {
    return React.cloneElement(this.props.renderContainerComponent(), {
      style: [
        styles.button,
        this.props.style && this.props.style,
        this.props.disabled && styles.buttonDisabled,
      ],
    }, (
      <Text style={[
        styles.buttonText,
        this.props.textStyle && this.props.textStyle,
        this.props.disabled && styles.buttonTextDisabled,
        ]}>
        {this.props.text}
      </Text>
    ));
  }

  render() {
    return (
      <RNButton
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        {this._renderContent()}
      </RNButton>
    );
  }
}

let styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00a5e6',
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonDisabledIOS: {

  },
  buttonDisabledAndroid: {

  },
  buttonDisabled: {
    backgroundColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonTextDisabled: {
    color: '#666'
  },
});
