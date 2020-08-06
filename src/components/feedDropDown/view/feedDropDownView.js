import React, {PureComponent} from 'react';

// Constants
// Components

import styles from './feedDropDownStyles';
import DropdownButton from '../../dropDownButton/view/dropDownButtonView';

class FeedDropdownView extends PureComponent {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions

  render() {
    const {handleOnDropdownSelect, options} = this.props;

    return (
      <DropdownButton
        defaultText={'All'}
        selectedOptionIndex={0}
        options={options}
        onSelect={handleOnDropdownSelect}
        rowTextStyle={styles.rowTextStyle}
        dropdownStyle={styles.dropdownStyle}
        textStyle={styles.dropdownText}
      />
    );
  }
}

export default FeedDropdownView;
