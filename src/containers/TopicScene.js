/**
 * @flow
 */
import React, {
    PropTypes
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import {
    changeRoute,
} from '../actions/route';
import {
    connect
} from 'react-redux';
import {
    DaysTopic
} from '../constants/buildVar';

import NavBar from '../components/NavBar';
import Swiper from 'react-native-swiper';
import GetIcon from '../components/GetIcon';
import IconFA from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

class TopicScene extends React.Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
    this.renderTopic = this.renderTopic.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
        datasource: ds.cloneWithRows(DaysTopic),
    };
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    name: PropTypes.string,
  };

  goTo(route: string, key: ?number){
      this.props.dispatch(changeRoute(route, this.props.navigator.props.navKey, key));
  }

  renderTopic(topic: Object): React.Component{
      const topicIcon = <GetIcon
          {...topic}/>;
      const index = topic.key + 1;
      const route = `/day${index}/?name=${topic.title}`;

      return (
            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => this.goTo(route, topic.key)}>
                <View style={styles.rowContent}>

                    {topicIcon}
                    <Text style={styles.text}>
                        Day{index}
                    </Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
      );
  }

  renderRightButton(){
      return(
          <IconFA.Button
            onPress = {() => this.goTo('/logs/?name=瀏覽紀錄')}
            backgroundColor='#00a5e6'
            size={20}
            name='cogs' />
      );
  }

  render() {
    return (
      <View style={styles.container}>
          <NavBar
              navigator={this.props.navigator}
              title={this.props.name}
              renderRightButtonsComponent={this.renderRightButton}/>

            <Swiper style={styles.wrapper}
                height={150}
                horizontal={true}
                autoplay={true}>
                <View style={styles.slide1}>
                    <Text style={styles.swiperText}>Easy</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.swiperText}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.swiperText}>And simple</Text>
                </View>
            </Swiper>

            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.datasource}
                renderRow={this.renderTopic}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    swiperText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: 400,
        height: 240,
    },
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        width: (width/3),
        height: (width/3),
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#CCC'
    },
    rowContent: {
        alignItems: 'center',
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    }
});

function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps, null, null, { withRef: true })(TopicScene);
