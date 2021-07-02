import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "./Button.style";

interface IButton {
  disabled?: boolean;
  children?: any;
  activeOpacity?: number;
  onPress?: () => void;
  style?: any;
  text?: string;
  loading?: boolean;
}

function Button(props: IButton) {
  const {
    disabled,
    children,
    activeOpacity,
    onPress,
    style,
    text,
    loading,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled || loading}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator
          color="white"
          size="small"
          testID="loading-test"
        />
      ) : children ? (
        children
      ) : (
        <Text style={[styles.text, { color: "white" }]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
