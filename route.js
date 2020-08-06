/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Feed from './src/screens/feed/screen/feedScreen';
import NewsDetails from './src/screens/newsDetails/screen/newsDetailsScreen';
import {StackNavigatorHelper} from 'react-navigation-helper';
import Settings from './src/screens/settings/settingsScreen';
import Bookmarks from './src/screens/bookmarks/bookmarksScreen';
import Icon from './src/components/icon';
import Touchable from './src/basicUIElements/touchable';

const Routes = createStackNavigator(
  {
    Feed: {
      screen: StackNavigatorHelper.setInitParamsToProps(Feed),
      navigationOptions: ({navigation}) => ({
        headerTitle: () => (
          <View>
            <Text
              style={{
                color: EStyleSheet.value('$stableWhite'),
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              News App
            </Text>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 25,
              margin: 10,
              overflow: 'hidden',
            }}>
            <Touchable
              onPress={() => {
                navigation.navigate('Settings');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                margin: 10,
              }}>
              <Icon
                name={'settings'}
                viewBox="0 0 20 20"
                height={25}
                width={25}
                fill={EStyleSheet.value('$stableWhite')}
              />
            </Touchable>
          </View>
        ),
      }),
    },
    Settings: {
      screen: StackNavigatorHelper.paramsToProps(Settings),
    },
    NewsDetails: {
      screen: StackNavigatorHelper.paramsToProps(NewsDetails),
    },
    Bookmarks: {
      screen: StackNavigatorHelper.paramsToProps(Bookmarks),
    },
  },
  {
    initialRouteName: 'Feed',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#88A0A8',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerBackground: () => <View style={styles.feed} />,
      transitionConfig: () =>
        StackNavigatorHelper.transitionConfig({
          Feed: 'push',
          Settings: 'thisisnotworking',
          NewsDetails: 'push',
        }),
    },
  },
);

export default createAppContainer(Routes);

const styles = EStyleSheet.create({
  feed: {
    backgroundColor: '$primaryColor',
    width: '100%',
    height: '100%',
  },
});
