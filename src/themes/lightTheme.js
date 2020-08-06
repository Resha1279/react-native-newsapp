import { Dimensions, Platform, StatusBar } from 'react-native';

export default {
  // Primary Colors
  $theme: 'light',
  $primaryColor: '#88A0A8',
  $primaryDarkColor: '#668088',
  $secondaryColor: '#668088',
  $primaryBackgroundColor: '#FFFFFF',
  $primaryLightBackground: '#ffffff',
  $primaryGrayBackground: '#999',
  $primaryWhiteLightBackground: '#ffffff',
  $secondaryBackground: '#f0f0f0',
  $white: '#FFFFFF',
  $black: '#000000',
  $primaryBlue: '#03A9F4',
  $primaryDarkBlue: '#0288D1',
  $primaryLightBlue: '#eaf2fc',
  $primaryGray: '#f5f5f5',
  $primaryDarkGray: '#788187',
  $primaryLightGray: '#f6f6f6',
  $primaryRed: '#e63535',
  $companyRed: '#c10000',
  $primaryBlack: '#3c4449',
  $primaryTransparentBlack: 'rgba(226,226,226,0.9)',
  $primaryText: '#3c4449',
  $primaryDarkText: '#262a2f',
  $primaryFaintText: '#7c8eaa',
  $textShadow: 'rgba(255,255,255,0.8)',

  // General Colors
  $borderColor: '#ebebeb',
  $tagColor: '#c1c5c7',
  $bubblesBlue: '#5CCDFF',
  $iconColor: '#c1c5c7',
  $darkIconColor: '#c1c5c7',
  $borderTopColor: '#cfcfcf',
  $dangerColor: '#fff',
  $warningColor: '#fff',
  $successColor: '#fff',
  $disableButton: '#fff',
  $shadowColor: '#b0b0b0',
  $disableGray: '#fff',
  $editorButtonColor: '#3c4449',
  $stableWhite: '#ecf0f1',
  $notificationBorder: '#fff',
  $tableTrColor: '#f5f5f5',
  $tableBorderColor: '#FFFFFF',
  $noConnectionColor: '#788187',
  $separatorColor: '#e2e2e2',

  // Devices Sizes
  $deviceHeight:
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : Dimensions.get('window').height ,//+ StatusBar.currentHeight,
  $deviceWidth: Dimensions.get('window').width,

  // Fonts Properties
  $primaryFont: 'Roboto',
  $editorFont: 'RobotoMono-Regular',
  $primaryLatterSpacing: 0,
};
