import React, {PureComponent} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './feedListStyles';
import Touchable from '../../../basicUIElements/touchable';
import Loading from '../../../basicUIElements/loading';
import FeedPlaceHolder from '../../../basicUIElements/placeHolder/feedPlaceHolder';
import {__DEV__} from '../../../../constants';
import FeedDropdown from '../../feedDropDown/container/feedDropDownContainer';
import {withNavigation} from 'react-navigation';
import {createBookmark} from '../../../../database/data';

class FeedList extends PureComponent {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.setCategory = this.setCategory.bind(this);

    this.state = {
      loading: true,
      data: '',
      page: 1,
      refreshing: false,
      category: 0,
      onEndReachedCalled: true,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.makeRequest();
  }

  onRefresh = () => {
    this.setState({loading: true, refreshing: false, page: 1, data: ''}, () => {
      this.makeRequest();
    });
  };

  makeRequest = () => {
    const data = require('../../../../service/api/feeds');
    // console.log('category: ',this.state.category);
    data.fetchFeeds(this.state.page, this.state.category).then(data => {
      this.setState({
        data: [...this.state.data, ...data],
        loading: false,
      });
      // if (__DEV__) {
      //   console.log('data:::', data);
      // }
    });
  };

  setCategory = category => {
    this.setState(
      {
        category: category,
      },
      () => {
        this.onRefresh();
      },
    );
  };

  loadMoreItems = () => {
    if (!this.state.onEndReachedCalled) {
      this.setState({onEndReachedCalled: true}, () => {
        if (this.state.page < 11) {
          this.setState({page: this.state.page + 1}, () => {
            this.makeRequest();
          });
        }
      });
    }
  };

  _renderFooter = () => {
    if (this.state.page < 6) {
      return (
        <View style={styles.footer}>
          <Loading />
        </View>
      );
    } else if (this.state.page < 11) {
      return (
        <View style={styles.footer}>
          {/* TODO: add Scroll to top*/}
          <Text>showing older news</Text>
          <Loading />
        </View>
      );
    } else
      return (
        <View style={styles.footer}>
          {/* TODO: add Scroll to top*/}
          <Text>you have reached the end</Text>
        </View>
      );
  };

  saveBookmarks = item => {
   // console.log('bookmarks:', item);
    const bookmarks = {
      id: item.id,
      title: item.title,
      description: item.description,
      image_url: item.image_url,
      created_at: item.created_at,
      read: false,
    };
    createBookmark(bookmarks)
      .then()
      .catch(error => {
        alert(`Bookmark Not Added ${error}`);
      });
  };

  renderFeedList(item, index) {
    const {navigate} = this.props.navigation;
    const [data] = [this.state.data];

    return (
      <View style={styles.container}>
        <Touchable
          style={styles.bookmark}
          onPress={() => {
            this.saveBookmarks(item);
          }}>
          <View />
        </Touchable>
        <Touchable
          useForeground={true}
          onPress={() => {
            navigate('NewsDetails', {data, index});
          }}>
          <View style={styles.feedImageContainer}>
            <Image source={{uri: item.image_url}} style={styles.feedImage} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <View>
                <Text style={[styles.primaryText, styles.title]}>
                  {item.title}
                </Text>
                <Text
                  numberOfLines={3}
                  style={[styles.secondaryText, styles.description]}>
                  {item.description}
                </Text>
              </View>

              <View style={styles.bottom}>
                <Text style={[styles.tertiaryText, styles.title]}>
                  source.com
                </Text>
                <Text style={[styles.tertiaryText, styles.title]}>
                  {item.created_at}
                </Text>
              </View>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <FeedDropdown setCategory={this.setCategory} />
          <View style={styles.loadingContainer}>
            <FeedPlaceHolder />
          </View>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <FeedDropdown setCategory={this.setCategory} />
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => this.renderFeedList(item, index)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={5}
          removeClippedSubview={true}
          onEndReachedThreshold={0.6}
          onMomentumScrollBegin={() => {
            this.state.onEndReachedCalled = false;
          }}
          onEndReached={this.loadMoreItems}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          ListFooterComponent={this._renderFooter}
          extraData={this.state}
        />
      </View>
    );
  }
}

export default withNavigation(FeedList);
