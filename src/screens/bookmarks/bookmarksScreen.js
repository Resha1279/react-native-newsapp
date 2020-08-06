import React from 'react';
import {View, FlatList, Text, Image, Button} from 'react-native';
import Touchable from '../../basicUIElements/touchable';
import {
  queryAllBookmarkLists,
  deleteBookmark,
  deleteAllBookmarkLists,
} from '../../../database/data';

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BookmarkLists: '',
      refresh: false,
    };
  }

  componentDidMount() {
    this.getBookmarks();
  }

  getBookmarks = () => {
    queryAllBookmarkLists()
      .then(allBookmarkLists => {
        this.setState({BookmarkLists: allBookmarkLists});
        console.log(`Bookmarks: ${this.state.BookmarkLists}`);
      })
      .catch(error => {
        this.setState({BookmarkLists: []});
        console.log(`Bookmarks error: ${error}`);
      });
  };

  onDeleteBookmark = id => {
    deleteBookmark(id)
      .then(() => this.getBookmarks())
      .catch(error => {
        console.log(
          `Failed to delete bookmark with id = ${id}, error=${error}`,
        );
      });
  };

  onDeleteAllBookmark = () => {
    deleteAllBookmarkLists()
      .then(() => this.getBookmarks())
      .catch(error => {
        console.log(`Failed to delete bookmark error=${error}`);
      });
  };

  renderBookmarksList = item => {
    console.log('renderbookmarklist', item);

    return (
      <View>
        <Touchable onPress={() => this.onDeleteBookmark(item.id)}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={{uri: item.image_url}}
                style={{height: 50, width: 50}}
              />
            </View>
            <View>
              <View>
                <Text>source.com</Text>
              </View>
              <View>
                <Text>{item.title}</Text>
              </View>
              <View style={{marginBottom: 20}}>
                <Text>{item.created_at}</Text>
              </View>
            </View>
            {/* <View>
              <Button
                title={'Delete'}
                onPress={() => this.onDeleteBookmark(item.id)}
              />
            </View> */}
          </View>
        </Touchable>
      </View>
    );
  };

  render() {
    return (
      <View>
        <View>
          <Button
            title={'Delete all'}
            onPress={() => this.onDeleteAllBookmark()}
          />
        </View>
        <FlatList
          data={this.state.BookmarkLists}
          renderItem={({item}) => this.renderBookmarksList(item)}
          keyExtractor={item => item.id.toString()}
          removeClippedSubview={true}
        />
      </View>
    );
  }
}

export default Bookmarks;
