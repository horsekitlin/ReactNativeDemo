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
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';

class FirstScene extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <View style={styles.container}>
          <NavBar
              navigator={this.props.navigator}
              title={this.props.name}
              renderRightButtonsComponent={this.renderNavRightButtons}/>

          <Text style={{fontSize: 50, margin: 50}}>First Scene</Text>
          <Text style={{fontSize: 50, margin: 50}}>First Scene</Text>
          <Text style={{fontSize: 50, margin: 50}}>First Scene</Text>
          <Text style={{fontSize: 50, margin: 50}}>First Scene</Text>
          <Text style={{fontSize: 50, margin: 50}}>First Scene</Text>
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
