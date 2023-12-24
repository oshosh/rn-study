import React, { PropsWithChildren } from 'react';
import { ImageStyle, Keyboard, TextStyle, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

interface Props {
  style?: ViewStyle | TextStyle | ImageStyle;
}

const DismissKeyboardView = ({ children, ...props }: PropsWithChildren<Props>) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
