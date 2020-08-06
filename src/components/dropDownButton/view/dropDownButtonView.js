import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

// External components
import ModalDropdown from 'react-native-modal-dropdown';

// Styles
import styles from './dropDownButtonStyles';
import Icon from '../../icon';


const renderDropdownRow = (
  rowData,
  rowID,
  highlighted,
  rowTextStyle,
  noHighlight,
  dropdownRowWrapper,
) => (
  <TouchableHighlight style={styles.rowWrapper} underlayColor="#E9F2FC">
    <View
      style={[
        styles.dropdownRow,
        dropdownRowWrapper,
        !noHighlight && highlighted && styles.highlightedRow,
      ]}>
      <Text
        style={[
          rowTextStyle || styles.rowText,
          !noHighlight && highlighted && styles.highlightedRowText,
        ]}>
        {rowData}
      </Text>
    </View>
  </TouchableHighlight>
);

const DropdownButton = ({
  defaultText,
  onSelect,
  dropdownStyle,
  dropdownTextStyle,
  dropdownButtonStyle,
  textStyle,
  rowTextStyle,
  selectedOptionIndex,
  options,
  style,
  noHighlight,
  dropdownRef,
  dropdownRowWrapper,
}) => (
  <View   style={[styles.container, dropdownButtonStyle]}>

    <ModalDropdown
      ref={dropdownRef}
      style={[!style ? styles.button : style]}
      textStyle={[textStyle || styles.buttonText]}
      dropdownStyle={[
        styles.dropdown,
        dropdownStyle,
        {height: 35 * (options.length + 1)},
      ]}
      animated={true}
      dropdownTextStyle={[dropdownTextStyle || styles.dropdownText]}
      dropdownTextHighlightStyle={styles.dropdownTextHighlight}
      options={options}
      onSelect={e => onSelect && onSelect(e, options[e])}
      defaultIndex={selectedOptionIndex}
      defaultValue={defaultText}
      renderSeparator={() => null}
      renderRow={(rowData, rowID, highlighted) =>
        renderDropdownRow(
          rowData,
          rowID,
          highlighted,
          rowTextStyle,
          noHighlight,
          dropdownRowWrapper,
        )
      }
    />


  </View>
);
export default DropdownButton;


