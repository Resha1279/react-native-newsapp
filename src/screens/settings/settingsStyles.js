import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryBackgroundColor',
  },
  item: {
    flexDirection: 'row',
    padding: 14,
    margin: 1,
    alignItems: 'center',
  },
  title: {
    marginLeft: 20,
    color: '$primaryText',
  },
  heading: {
    paddingTop: 40,
    paddingBottom: 12,
    paddingLeft: 14,
    color: '$primaryFaintText',
  },
  separator: {
    backgroundColor: '$separatorColor',
    height: 1.5,
    opacity: 0.9,
    marginLeft: 60,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '$secondaryColor',
  },
});
