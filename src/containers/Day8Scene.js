/**
 * @flow
 */
import React, {
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    connect
} from 'react-redux';

import NavBar from '../components/NavBar';

class Day8Scene extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <NavBar
                    navigator={this.props.navigator}
                    title={this.props.name} />
                <View style={styles.center}>
                    <Text style={styles.h1}>Day 8</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 48,
        fontWeight: '700',
    },
});

function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps, null, null, { withRef: true })(Day8Scene);
