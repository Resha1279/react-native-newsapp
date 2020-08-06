import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Shine,
  ShineOverlay,
  Progressive,
} from 'rn-placeholder';
import EStyleSheet from 'react-native-extended-stylesheet';

// TODO: make container for place holder wrapper after alpha
const FeedPlaceHolder = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Placeholder Animation={Fade}>
        {/*<PlaceholderLine width={30}  style={styles.textWrapper}/>*/}
        <PlaceholderLine width={96} height={200} style={styles.media} />
        <PlaceholderLine
          width={30}
          style={[styles.textWrapper, {marginTop: -180}]}
        />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
      </Placeholder>
      {/*<View style={styles.separator}/>*/}

      <Placeholder Animation={Fade}>
        {/*<PlaceholderLine width={30}  style={styles.textWrapper}/>*/}
        <PlaceholderLine width={96} height={200} style={styles.media} />
        <PlaceholderLine
          width={30}
          style={[styles.textWrapper, {marginTop: -180}]}
        />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
      </Placeholder>
      {/*<View style={styles.separator}/>*/}

      <Placeholder Animation={Fade}>
        {/*<PlaceholderLine width={30}  style={styles.textWrapper}/>*/}
        <PlaceholderLine width={96} height={200} style={styles.media} />
        <PlaceholderLine
          width={30}
          style={[styles.textWrapper, {marginTop: -180}]}
        />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
        <PlaceholderLine width={90} style={styles.paragraphWrapper} />
      </Placeholder>
      {/*<View style={styles.separator}/>*/}
    </ScrollView>
  );
};
export default FeedPlaceHolder;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryBackgroundColor',
    borderStyle: 'solid',
    marginRight: 0,
    marginLeft: 0,
    marginTop: 10,
  },
  textWrapper: {
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '$primaryGrayBackground',
    opacity: 0.1,
  },
  media: {
    backgroundColor: '$primaryGrayBackground',
    borderRadius: 5,
    marginHorizontal: 8,
    opacity: 0.1,
  },
  paragraphWrapper: {
    marginHorizontal: 20,
    marginRight: 20,
    backgroundColor: '$primaryGrayBackground',
    opacity: 0.1,
  },
  separator: {
    borderRadius: 0,
    backgroundColor: '$primaryGrayBackground',
    opacity: 0.5,
    marginTop: 12,
    height: 10,
  },
});
