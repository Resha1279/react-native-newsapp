import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';

import styles from './feedStyles';
import FeedList from '../../../components/feedList/view/feedListView';
import EStyleSheet from 'react-native-extended-stylesheet';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={EStyleSheet.value('$primaryDarkColor')}
          barStyle={'light-content'}
        />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.feedContainer}>
              <FeedList />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Feed;
