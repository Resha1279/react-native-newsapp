import React from 'react';
import {
  Dimensions,
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
  Button,
} from 'react-native';

import styles from './newsDetailsStyles';
import {withNavigation} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

const widthScreen = Dimensions.get('window').width;

class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDetailsList(item) {
    return (
      <View style={styles.container}>
        <ScrollView
          // contentContainerStyle={{  flexGrow:1 }}
          directionalLockEnabled={true}
          bounces={true}
          //scrollViewStyle = { {transform: [{ rotate: 40 }] }}
          // stickyHeaderIndices={[0]}
          //  persistentScrollbar={true}
        >
          <View>
            <Text style={[styles.secondaryText, styles.description]}>
              source.com
            </Text>
          </View>
          <View>
            <Text style={[styles.primaryText, styles.title]}>{item.title}</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={[styles.tertiaryText, styles.description]}>
              {item.created_at}
            </Text>
          </View>
          <Image source={{uri: item.image_url}} style={styles.feedImage} />

          <View style={{marginTop: 20}}>
            <Text style={[styles.secondaryText, styles.description]}>
              {item.description}kjkdljsklkkk kkkkkkkkk kkkkkkkkkkkkk
              kkkkkkkkkkkkk kkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkkkkkkk
              kkkkkkkkk kkkk kkkkkkk kkkkkkkk kkkkkkkkkk kkk kkkkkkk kkkkkkkkkk
              kkkkkkkkkk kkkkkkkk kkkkkk kkkkkkk kkkkkkkkkkkk kkkkkkkkkkkkkkk
              kkkkkkkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkkkkk kkkkkkkk kkkkkkkk
              kkkkkkkkkkkkk kkkkkkkkkkk' kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              kkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </Text>
          </View>
          <View />

          <View style={styles.buttonContainer}>
            <Button
              color={EStyleSheet.value('$secondaryColor')}
              title={'read more'}
              onPress={this._onPress}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    const {navigation} = this.props;
    const data = navigation.state.params.data;
    const Index = navigation.state.params.index;
    return (
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => this.renderDetailsList(item)}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={2}
        pagingEnabled={true}
        horizontal={true}
        onEndReached={() => navigation.navigate('Feed')}
        getItemLayout={(data, index) => ({
          length: widthScreen,
          offset: widthScreen * index,
          index,
        })}
        initialScrollIndex={Index}
        disableIntervalMomentu={true}
        extraData={data}
        nestedScrollEnabled={true}
        bounces={true}
      />
    );
  }
}

export default withNavigation(NewsDetails);
