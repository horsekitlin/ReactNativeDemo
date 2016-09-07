/*
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default class GetIcon extends React.Component{
    static propTypes= {
        isFA: PropTypes.bool.isRequired,
        icon: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
    };

    constructor(props){
        super(props);
    }
    render(){
        return (this.props.isFA)
          ? <IconFA
             size={this.props.size}
             color={this.props.color}
             name={this.props.icon}/>
         :    <Icon
            size={this.props.size}
            color={this.props.color}
            name={this.props.icon}/>;

    }
}
