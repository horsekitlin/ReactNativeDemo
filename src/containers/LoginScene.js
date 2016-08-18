/*
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import NavBar from '../components/NavBar';
import { changeRoute, replaceRoute } from '../actions/route';
import { login } from '../actions/auth';


class LoginScene extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.state = {
      account: '',
      password: '',
      buttonDisabled: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {auth} = nextProps;

    if (this.props.auth !== auth && auth.action === 'login') {
      this.setState({buttonDisabled: auth.isFetching});
      if (auth.success) {
        //this.props.dispatch(replaceRoute('/?hasLaunchImage=false', this.props.navigator.props.navKey));
        this.props.dispatch(replaceRoute('/main?hasLaunchImage=false', this.props.navigator.props.navKey));
        return;
      }
    }

  }

  handleLogin() {
    this.refs.textInput_account.blur();
    this.refs.textInput_password.blur();
    this.props.dispatch(login(this.state.account, this.state.password));
  }

  handleSignup() {
    this.props.dispatch(changeRoute('/auth/signup', this.props.navigator.props.navKey));
  }

  _renderErrorTextView() {
    let errorText = this.props.auth.errorText;
    if (!errorText) { return null; }
    return (
      <Text style={styles.errorText}>
        {errorText}
      </Text>
    );
  }

  render() {

    return (
      <View style={styles.container}>
        <NavBar navigator={this.props.navigator} />

        <TextInput
          containerStyle={styles.textInput}
          onSubmitEditing={() => { this.refs.textInput_password.focus(); }}
          onChangeText={(text) => this.setState({account: text})}
          value={this.state.account}
          ref="textInput_account"
          placeholder="輸入帳號"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="輸入密碼"
          containerStyle={styles.textInput}
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => { this.refs.textInput_password.blur(); }}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          ref="textInput_password"
        />

        {this._renderErrorTextView()}

        <Button
          onPress={this.handleLogin}
          disabled={this.state.buttonDisabled}
          text="確認送出"
        />

        <Button
          onPress={this.handleSignup}
          disabled={this.state.buttonDisabled}
          text="我要註冊"
          style={styles.buttonSecondary}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    paddingBottom: 20
  },
  textInput: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  buttonSecondary: {
    backgroundColor: '#888',
  },
  errorText: {
    color: '#ff0000',
    marginLeft: 40,
    marginRight: 40
  },
});

function mapStateToProps(state) {
  const {auth} = state;

  return {
    auth,
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(LoginScene);
