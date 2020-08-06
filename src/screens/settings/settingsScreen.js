import React from 'react';
import {View, Text, FlatList, Switch} from 'react-native';
import styles from './settingsStyles';
import Touchable from '../../basicUIElements/touchable';
import {withNavigation} from 'react-navigation';
import {ThemeContext} from '../../../App';
import EStyleSheet from 'react-native-extended-stylesheet';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.DATA = [
      {
        key: 1,
        title: 'Dark Mode',
        iconLeft: '',
        button: 'themeSwitch',
        onSwitch: () => {
          // console.log('need to call toggleTheme in app.js');
        },
      },
      {
        key: 2,
        title: 'Notifications & Sounds',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 3,
        title: 'Language',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 4,
        title: 'Bookmarks',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 5,
        heading: 'Support',
      },
      {
        key: 6,
        title: 'Feedback',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 7,
        title: 'Report a Problem',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 8,
        title: 'Help',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
      {
        key: 9,
        title: 'Legal & Policies',
        iconLeft: '',
        iconRight: '',
        onPress: () => {
          this.props.navigation.navigate('Bookmarks');
        },
      },
    ];
  }

  renderSettingsList = item => {
    return (
      <View>
        {item.heading ? (
          <Text style={styles.heading}>{item.heading}</Text>
        ) : (
          <Touchable onPress={item.onPress}>
            <View style={styles.item}>
              <View style={styles.iconContainer} />
              <Text style={styles.title}>{item.title}</Text>
              {item.button === 'themeSwitch' ? (
                <ThemeContext.Consumer>
                  {({toggleTheme}) => (
                    <View style={styles.button}>
                      <Switch
                        thumbColor={{
                          color: EStyleSheet.value('$secondaryColor'),
                        }}
                        onValueChange={toggleTheme}
                        value={
                          EStyleSheet.value('$theme') === 'light' ? false : true
                        }
                      />
                    </View>
                  )}
                </ThemeContext.Consumer>
              ) : null}
            </View>
          </Touchable>
        )}
      </View>
    );
  };

  separator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => this.renderSettingsList(item)}
          keyExtractor={item => item.key.toString()}
          removeClippedSubview={true}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

export default withNavigation(Settings);
