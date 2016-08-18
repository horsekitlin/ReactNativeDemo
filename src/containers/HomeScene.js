/**
 * @flow
 */
import React,{ PropTypes } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabViewContainer from './TabViewContainer';
import TabIcon from '../components/TabIcon';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class HomeScene extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          page: 'first',
        };
      }

    static propTypes = {
        tabIndex: PropTypes.number,
    };

      static defaultProps = {
        tabIndex: 0,
      };

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
            initialPage={0}
            tabBarPosition='bottom'
            renderTabBar= {() => <TabIcon />}>
            <View tabLabel={{
                    icon: 'files-o',
                    name: '我的檔案'
                }} style={styles.card}>
                <TabViewContainer
                       navKey="first"
                    initialRouteUrl="/first/"
                    navigator={this.props.navigator}
                    ref="tab_0"/>
            </View>
            <View tabLabel={{
                    icon: 'th-list',
                    name: '檔案列表',
                }} style={styles.card}>
                <TabViewContainer
                       navKey="files"
                    initialRouteUrl="/first/"
                    navigator={this.props.navigator}
                    ref="tab_1"/>
            </View>
            <View tabLabel={{
                    icon: 'comments-o',
                    name: '聊天室',
                }} style={styles.card}>
                <TabViewContainer
                       navKey="chat"
                    initialRouteUrl="/first/"
                    navigator={this.props.navigator}
                    ref="tab_2"/>
            </View>
            <View tabLabel={{
                    icon: 'bell-o',
                    name: '通知',
                }} style={styles.card}>
                <TabViewContainer
                       navKey="first"
                    initialRouteUrl="/first/"
                    navigator={this.props.navigator}
                    ref="tab_3"/>
            </View>
            <View tabLabel={{
                    icon: 'feed',
                    name: '動態',
                }} style={styles.card}>
                <TabViewContainer
                       navKey="first"
                    initialRouteUrl="/first/"
                    navigator={this.props.navigator}
                    ref="tab_4"/>
            </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',

    flex: 1,
  },
});


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null, null, { withRef: true })(HomeScene);
/**

<TabViewContainer
   navKey="first"
   initialRouteUrl="/first/"
   navigator={this.props.navigator}
   ref="tab_0"/>
<Tabs selected={this.state.page} style={styles.tab}
    selectedStyle={styles.tabSelected}
    onSelect={el=>this.setState({page:el.props.name})}>
       <View name="first">
           <Text style={{justifyContent: 'center'}}>我的檔案</Text>
          <Text style={styles.tabText} selectedStyle={styles.selectedStyle}>
              <Icon style={{justifyContent:'center'}} name="files-o" size={20} />
           </Text>
           <Text style={{justifyContent: 'center'}}>我的檔案</Text>

       </View>
       <View name='second'>
          <Text style={styles.tabText} selectedStyle={styles.selectedStyle}>
              <Icon name="th-list" size={20} />
           </Text>
           <Text>我的檔案</Text>
       </View>
       <View name='third'>
          <Text name="msg" style={styles.tabText} selectedStyle={styles.selectedStyle}>
              <Icon name="comments-o" size={20} />
           </Text>
           <Text>聊天室</Text>
       </View>
       <View name='four'>
          <Text name="first" style={styles.tabText} selectedStyle={styles.selectedStyle}>
              <Icon name="bell-o" size={20} />
           </Text>
           <Text>通知</Text>
       </View>
       <View name='fifth'>
          <Text name="first" style={styles.tabText} selectedStyle={styles.selectedStyle}>
              <Icon name="feed" size={20} />
           </Text>
           <Text>動態</Text>
       </View>
</Tabs>
<TabBarIOS tintColor="#00a5e6">

  <Icon.TabBarItemIOS
    title="我的檔案"
    iconName="files-o"
    iconSize={20}
    selected={this.state.tabIndex === 0}
    onPress={() => this.handleSelectTab(0)}>
    <TabViewContainer
      navKey="files"
      initialRouteUrl="/files/"
      navigator={this.props.navigator}
      ref="tab_0"
    />
  </Icon.TabBarItemIOS>

  <Icon.TabBarItemIOS
    title="檔案分類"
    iconName="th-list"
    iconSize={20}
    selected={this.state.tabIndex === 1}
    onPress={() => this.handleSelectTab(1)}>

    <TabViewContainer
      navKey="fileGroups"
      initialRouteUrl="/fileGroups/"
      navigator={this.props.navigator}
      ref="tab_1"
    />
  </Icon.TabBarItemIOS>

  <Icon.TabBarItemIOS
    title="訊息"
    iconName="comments-o"
    iconSize={20}
    selected={this.state.tabIndex === 2}
    onPress={() => this.handleSelectTab(2)}>

    <TabViewContainer
      navKey="timeline"
      initialRouteUrl="/stubText?text=TODO timeline view"
      navigator={this.props.navigator}
      ref="tab_2"
    />
  </Icon.TabBarItemIOS>

  <Icon.TabBarItemIOS
    title="通知"
    iconName="bell-o"
    iconSize={20}
    selected={this.state.tabIndex === 3}
    onPress={() => this.handleSelectTab(3)}>

    <TabViewContainer
      navKey="groups"
      initialRouteUrl="/notifications/"
      navigator={this.props.navigator}
      ref="tab_3"
    />
  </Icon.TabBarItemIOS>

  <Icon.TabBarItemIOS
    title="動態"
    iconName="feed"
    iconSize={20}
    selected={this.state.tabIndex === 4}
    onPress={() => this.handleSelectTab(4)}>

    <TabViewContainer
      navKey="feed"
      initialRouteUrl="/postlist/?name=動態"
      navigator={this.props.navigator}
      ref="tab_4"
    />
  </Icon.TabBarItemIOS>

</TabBarIOS>
**/
