import React from "react";
import {
  TextInput,
  View,
  StyleProp,
  TextInputProps,
  TextStyle,
} from "react-native";
import styles from "./Input.style";

interface IInput extends TextInputProps {
  /**
   */
  style?: StyleProp<TextStyle>;
  /**
   * ref to input
   */
  inputRef?: any;
  /**
   * does not allow editing the input
   */
  disabled?: boolean;
  /**
   * Icon to the right of the input
   */
  Icon?: any;
}

function Input(props: IInput) {
  const { inputRef, disabled, style, Icon } = props;

  const hasIcon = !!Icon;

  return (
    <View style={styles.container}>
      {hasIcon && <Icon style={styles.icon} />}

      <TextInput
        placeholderTextColor="rgba(0, 0, 0, .3)"
        placeholder=""
        {...props}
        testID="input-test"
        editable={!disabled}
        ref={inputRef}
        style={[
          styles.input,
          disabled ? styles.disabled : null,
          style,
          hasIcon ? { paddingLeft: 40 } : null,
        ]}
      />
    </View>
  );
}

export default Input;
