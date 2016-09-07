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
    ListView,
    InteractionManager,
    TouchableWithoutFeedback,
    RefreshControl,
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    changeRoute,
} from '../actions/route';
import {
    DaysTopic,
} from '../constants/buildVar';

import _ from 'lodash';
import NavBar from '../components/NavBar';
import GetIcon from '../components/GetIcon';
import SessionManager from '../utils/sessionManager';

class LogScene extends React.Component{
    constructor(props){
        super(props);

        this.goTo = this.goTo.bind(this);
        this.renderLog = this.renderLog.bind(this);
        this.refresh = this.refresh.bind(this);

        const prevRoutes = SessionManager.prevRoutes;

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            isRefreshing: false,
            dataSource: ds.cloneWithRows(this.sort(prevRoutes))
        };
    }

    sort(items){
        let arr = [];
        let index = items.length;
        console.log(index);
        for(index; index > 0; index--){
            console.log(items[index -1]);
            arr.push(items[index - 1]);
        }
        return arr;
    }

    refresh(){
        const prevRoutes = SessionManager.prevRoutes;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.sort(prevRoutes))
        });
    }

    goTo(route: string, key: ?number){
        this.props.dispatch(changeRoute(route, this.props.navigator.props.navKey, key))
        this.refresh();
    }

    renderLog(log: Object){

        if(_.isUndefined(log) || log.key < 0) {
            return null;
        }
        const index = log.key + 1;
        const topic = DaysTopic[index];

        return(
            <TouchableWithoutFeedback
                onPress={() => this.goTo(log.route, log.key)}>
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                    <GetIcon
                        {...topic}
                        size={30}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{topic.title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <NavBar
                    navigator={this.props.navigator}
                    title={this.props.name} />
                <ListView
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.refresh}
                      />
                    }
                    dataSource={this.state.dataSource}
                    renderRow={this.renderLog}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        padding: 5,
        margin: 5,

    },
    textContainer: {
        flex: 7,
    },
    text: {
        fontSize: 18,
        lineHeight: 25,
    },
});

function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps, null, null, { withRef: true })(LogScene);
