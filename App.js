import React from 'react';
import {View} from 'react-native';
import Routes from './route';
import EStyleSheet from 'react-native-extended-stylesheet';
import darkTheme from './src/themes/darkTheme';
import lightTheme from './src/themes/lightTheme';
import {getTheme, saveTheme} from './database/data';

export const ThemeContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRender: false,
      theme: false,
    };

    this.renderTheme();
  }

  toggleTheme = () => {
    const theme =
      EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
    EStyleSheet.build(theme);
    this.setState({shouldRender: false, theme: !this.state.theme}, () => {
      saveTheme()
        .then(this.setState({shouldRender: true}))
        .catch(error => console.log('theme not saved ', error));
    });
  };

  renderTheme = () => {
    getTheme().then(theme => {
      this.setState({theme}, () => {
      //  console.log('themestate ', this.state.theme);
        this.state.theme
          ? EStyleSheet.build(darkTheme)
          : EStyleSheet.build(lightTheme);
        this.setState({shouldRender: true});
      });
    });
  };

  render() {
    if (this.state.shouldRender) {
      return (
        <ThemeContext.Provider value={{toggleTheme: () => this.toggleTheme()}}>
          <Routes {...this.props} />
        </ThemeContext.Provider>
      );
    } else {
      return <View />;
    }
  }
}

export default App;
