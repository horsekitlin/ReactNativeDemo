/**
 * @flow
 */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import {
    changeRoute,
} from '../actions/route';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';


class FirstScene extends React.Component {
  constructor(props) {
    super(props);
    this.nextpage = this.nextpage.bind(this);
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    name: PropTypes.string,
  };

  static defaultProps = {
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
    });
  }

  componentWillReceiveProps(nextProps) {
    const {files} = nextProps;

  }

  nextpage(){
      var maxNum = 1000;
      var minNum = 0;
      var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      this.props.dispatch(changeRoute(`/first/?count=${n}`, this.props.navigator.props.navKey));
  }

  render() {
    return (
      <View style={styles.container}>
          <NavBar
              navigator={this.props.navigator}
              title={this.props.name}
              renderRightButtonsComponent={this.renderNavRightButtons}/>
          <Text onPress={this.nextpage}>Next Page</Text>


          <Text style={{fontSize: 50, margin: 50}}>{this.props.count || 'Home Page'}</Text>
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
  const {auth} = state;

  return {
      auth,
  };
}

export default connect(mapStateToProps, null, null, { withRef: true })(FirstScene);
