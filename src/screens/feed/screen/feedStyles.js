import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$primaryLightBackground',
  },
  topBar: {
    backgroundColor: '$primaryBackgroundColor',
    height: 50,
    borderBottomWidth: 2,
    borderColor: '$primaryLightBackground',
  },
  dropdownButtonContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingTop: 6,
    height: 50,
    paddingRight: 16,
  },
  iconContainer: {
    marginLeft: -8,
    justifyContent: 'center',
  },
  feedContainer: {
    height: '$deviceHeight',
    backgroundColor: '$primaryBackgroundColor',
  },
});
