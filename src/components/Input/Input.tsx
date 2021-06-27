import React from "react";
import {
  TextInput,
  View,
  Text,
  Platform,
  StyleProp,
  TextInputProps,
  TextStyle,
} from "react-native";
import styles from "./Input.style";
import { Ionicons } from "@expo/vector-icons";

interface IInput extends TextInputProps {
  dark?: boolean;
  style?: StyleProp<TextStyle>;
  inputRef?: any;
  disabled?: boolean;
  error?: string;
  mask?: string;
  Icon?: any;
}

function Input(props: IInput) {
  const { inputRef, disabled, error, style, dark, Icon } = props;

  const color = dark ? "hsla(0, 0%, 0%, .07)" : "white";
  const ios = Platform.OS === "ios";
  const hasIcon = !!Icon;

  return (
    <View style={styles.container}>
      {hasIcon && <Icon style={styles.icon} />}

      <TextInput
        placeholderTextColor="rgba(0, 0, 0, .3)"
        placeholder=""
        {...props}
        editable={!disabled}
        ref={inputRef}
        style={[
          styles.input,
          ios ? { backgroundColor: color } : null,
          disabled ? styles.disabled : null,
          error ? styles.error : null,
          style,
          hasIcon ? { paddingLeft: 40 } : null,
        ]}
      />

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
}

export default Input;
