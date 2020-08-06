import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

const Touchable = props => {
  const {style, children, radius, ...otherProps} = props;
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        style={style}
        {...otherProps}>
        {children ? <View style={style}>{children}</View> : null}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity style={style} {...otherProps}>
        {children ? <View style={style}>{children}</View> : null}
      </TouchableOpacity>
    );
  }
};

export default Touchable;
