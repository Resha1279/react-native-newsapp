/* eslint-disable no-lone-blocks */
import React, {PureComponent} from 'react';
import {View} from 'react-native';
import FeedDropdownView from '../view/feedDropDownView';
import {
  FEED_CATAGORIES,
  FEED_CATAGORIES_VALUE,
} from '../../../constants/options/feedCatagories';
import styles from '../../../screens/feed/screen/feedStyles';
import Icon from '../../icon';
import {withNavigation} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

class FeedDropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  _handleOnDropdownSelect = index => {
    switch (FEED_CATAGORIES_VALUE[index]) {
      case 'all':
        {
          this.props.setCategory(0);
        }
        break;

      case 'trending':
        {
          this.props.setCategory(1);
        }
        break;

      case 'business':
        {
          this.props.setCategory(2);
        }
        break;

      case 'politics':
        {
          this.props.setCategory(3);
        }
        break;

      case 'sports':
        {
          this.props.setCategory(4);
        }
        break;

      default:
        this.props.setCategory(0);
        break;
    }
  };

  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.dropdownButtonContainer}>
          <FeedDropdownView
            options={FEED_CATAGORIES}
            handleOnDropdownSelect={this._handleOnDropdownSelect}
            {...this.props}
          />
          <View style={styles.iconContainer}>
            <Icon
              name={'downArrow'}
              viewBox="0 0 20 20"
              height={12}
              width={12}
              fill={EStyleSheet.value('$secondaryColor')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(FeedDropdown);
