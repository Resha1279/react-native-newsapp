import Realm from 'realm';

export const THEME = 'theme';
export const BOOKMARKS = 'bookmarks';
export const BOOKMARKS_LIST = 'bookmarksList';

export const ThemeSchema = {
  name: THEME,
  primaryKey: 'id',
  properties: {
    id: 'int',
    darkmode: {type: 'bool', default: false},
  },
};

export const BookmarksSchema = {
  name: BOOKMARKS,
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    description: 'string',
    image_url: 'string',
    created_at: 'string',
    read: {type: 'bool', default: false},
  },
};

export const BookmarksListSchema = {
  name: BOOKMARKS_LIST,
  primaryKey: 'id',
  properties: {
    id: 'int',
    bookmarksList: {type: 'list', objectType: BOOKMARKS},
  },
};

const databaseOptions = {
  path: 'NewsFeed.realm',
  schema: [BookmarksListSchema, BookmarksSchema, ThemeSchema],
};

export const saveTheme = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let theme = realm.objectForPrimaryKey(THEME, 1);
          realm.create(THEME, {id: 1, darkmode: !theme.darkmode}, true);
          resolve(theme.darkmode);
          console.log('theme from savetheme ', theme.darkmode);
        });
      })
      .catch(error => reject(error));
  });

export const getTheme = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        if (!realm.objectForPrimaryKey(THEME, 1)) {
          realm.write(() => {
            realm.create(THEME, {darkmode: false, id: 1});
            let newtheme = realm.objectForPrimaryKey(THEME, 1);
            resolve(newtheme.darkmode);
          });
        } else {
          let newtheme = realm.objectForPrimaryKey(THEME, 1);
          resolve(newtheme.darkmode);
        }
      })
      .catch(error => reject(error));
  });

export const createBookmark = newBookmark =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(BOOKMARKS, newBookmark, true);
          resolve(newBookmark);
        });
      })
      .catch(error => reject(error));
  });

export const deleteBookmark = bookmarkId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingBookmarkList = realm.objectForPrimaryKey(
            BOOKMARKS,
            bookmarkId,
          );
          realm.delete(deletingBookmarkList);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const queryAllBookmarkLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let allBookmarkListsObjs = realm.objects(BOOKMARKS);
        resolve(allBookmarkListsObjs);
        console.log('allBookmarkLists', allBookmarkListsObjs);
      })
      .catch(error => {
        reject(error);
      });
  });

export const deleteAllBookmarkLists = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allBookmarkLists = realm.objects(BOOKMARKS);
          for (var index in allBookmarkLists) {
            let eachBookmarkList = allBookmarkLists[index];
            realm.delete(eachBookmarkList.bookmarksList);
          }
          realm.delete(allBookmarkLists);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const getBookmarksFromBookmarksListId = bookmarkListId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let bookmarkList = realm.objectForPrimaryKey(
          BOOKMARKS_LIST,
          bookmarkListId,
        );
        resolve(bookmarkList);
      })
      .catch(error => {
        reject(error);
      });
  });

export default new Realm(databaseOptions);
