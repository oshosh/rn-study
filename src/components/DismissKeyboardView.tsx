import React, { PropsWithChildren } from 'react';
import { Keyboard, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const DismissKeyboardView = ({ children, ...props }: PropsWithChildren<Props>) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
