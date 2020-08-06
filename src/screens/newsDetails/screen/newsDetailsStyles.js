import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  // flatlistContainer:{
  //   height: '$deviceHeight-50',
  // },
  container: {
    flex: 1,
    height: '$deviceHeight-50',
    width: '$deviceWidth',
    backgroundColor: '$primaryBackgroundColor',
    //borderBottomWidth: 5,
    overflow: 'hidden',
  },
  feedImage: {
    flex: 1,
    width: '$deviceWidth',
    height: 200,
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '$primaryDarkText',
    textShadowColor: '$textShadow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  secondaryText: {
    color: '$primaryText',
    fontSize: 14,
    lineHeight: 20,
  },
  tertiaryText: {
    color: '$primaryFaintText',
    fontSize: 14,
    lineHeight: 20,
  },
  separator: {
    height: 10,
    backgroundColor: '$primaryBackgroundColor',
    width: '$deviceWidth',
    elevation: 1,
  },
  title: {
    paddingLeft: 10,
    marginVertical: 10,
  },
  description: {
    paddingLeft: 10,
    overflow: 'hidden',
  },
  buttonContainer: {
    marginTop: 20,
   // marginBottom: 100,
    marginHorizontal: '30%',
  },
});

//export const styles = createStyle({
// container:{
//     flex:1,
//     height: '@deviceHeight-100',
//     width:'@deviceWidth',
//     backgroundColor:'@primaryBackgroundColor',
// },
// feedImage: {
//     flex:1,
//     width: '@deviceWidth',
//     height: 300,
// },
// primaryText: {
//     fontWeight: 'bold',
//     fontSize:16,
//     color: '@primaryDarkText',
//     textShadowColor: '@textShadow',
//     textShadowOffset: {width: -1, height: 1},
//     textShadowRadius: 10
// },
// secondaryText: {
//     color: '@primaryText',
//     fontSize:14,
//     lineHeight:20,
// },
// tertiaryText:{
//     color: '@primaryFaintText',
//     fontSize:14,
//     lineHeight:20,
// },
// separator: {
//     height:10,
//     backgroundColor: '@primaryBackgroundColor',
//     width:'$deviceWidth',
//     elevation:1,
// },
// title: {
//     paddingLeft: 10,
//     marginVertical: 10,
// },
// description: {
//     paddingLeft: 10,
//     overflow:'hidden',
// },
// button:{
//     //  marginBottom:100,
//     marginHorizontal:'30%'
// }
//});
