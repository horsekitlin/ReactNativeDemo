/*
 * @flow
 */
import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    style: View.propTypes.style,
    containerStyle: View.propTypes.style,
  };

  focus() {
    this.refs.innerViewNode.focus();
  }

  blur() {
    this.refs.innerViewNode.blur();
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <RNTextInput
          style={[styles.textInput, this.props.style]}
          placeholderTextColor="#888"
          underlineColorAndroid="#888"
          {...this.props}
          ref="innerViewNode"
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    fontSize: 24,
    height: 50,
    color: '#888',
  },
});
