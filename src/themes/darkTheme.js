import {Dimensions, Platform, StatusBar} from 'react-native';

export default {
  // Primary Colors
  $theme: 'dark',
  $primaryColor: '#2F2F2F',
  $primaryDarkColor: '#222222',
  $secondaryColor: '#F18F01',
  $primaryBackgroundColor: '#222222',
  $primaryLightBackground: '#2F2F2F',
  $primaryGrayBackground: '#000',
  $primaryWhiteLightBackground: '#2e3d51',
  $secondaryBackground: '#455066',
  $white: '#1e2835',
  $black: '#000000',
  $primaryBlue: '#F18F01',
  $primaryDarkBlue: '#1a509a',
  $primaryLightBlue: '#2e3d51',
  $primaryGray: '#f5f5f5',
  $primaryDarkGray: '#c1c5c7',
  $primaryLightGray: '#f6f6f6',
  $primaryRed: '#e63535',
  $companyRed: '#c10000',
  $primaryBlack: '#c1c5c7',
  $primaryTransparentBlack: 'rgba(0,0,0,0.7)',
  $primaryText: '#c1c5c7',
  $primaryDarkText: '#b7bbbd',
  $primaryFaintText: '#8da1bd',
  $textShadow: 'rgba(0, 0, 0, 0.75)',

  // General Colors
  $borderColor: '#c5c5c5',
  $tagColor: '#2e3d51',
  $bubblesBlue: '#5CCDFF',
  $borderTopColor: '#757575',
  $iconColor: '#788187',
  $darkIconColor: '#526d91',
  $dangerColor: '#fff',
  $warningColor: '#fff',
  $successColor: '#fff',
  $disableButton: '#fff',
  $shadowColor: '#80000000',
  $disableGray: '#fff',
  $editorButtonColor: '#fff',
  $stableWhite: '#ecf0f1',
  $notificationBorder: '#1e2835',
  $tableTrColor: '#2e3d51',
  $tableBorderColor: '#1e2835',
  $noConnectionColor: '#788187',
  $separatorColor: '#2F2F2F',

  // Devices Sizes
  $deviceHeight:
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : Dimensions.get('window').height, //+ StatusBar.currentHeight,
  $deviceWidth: Dimensions.get('window').width,

  // Fonts Properties
  //$primaryFont: 'Roboto',
  // $editorFont: 'RobotoMono-Regular',
  $primaryLatterSpacing: 0,
};
