import React from "react";
import {
  TextInput,
  View,
  Text,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./InputFilter.style";
import { FontAwesome, } from "@expo/vector-icons";

interface IInputFilter extends TextInputProps {
  /**
   * is using the dark theme
   */
  dark?: boolean;
  /**
   */
  style?: StyleProp<TextStyle>;
  /**
   * ref to input
   */
  inputFilterRef?: any;
  /**
   * does not allow editing the input
   */
  disabled?: boolean;
  /**
   * function called by clicking the clear button
   */
  onClear?: () => void;
  /**
   */
  styleContainer?: StyleProp<ViewStyle>;
  /**
   * current theme colors
   */
  colors?: any;
}

function InputFilter(props: IInputFilter) {
  const {
    inputFilterRef,
    style,
    styleContainer,
    dark,
    colors,
    disabled
  } = props;

  /**
   * when the focus is active, the clear button appears
   */
  const [focused, setFocused] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors?.searchBar,
        },
        styleContainer,
      ]}
    >
      <FontAwesome
        name="search"
        size={17}
        style={styles.icon}
        color={dark ? "#fff" : "rgba(0, 0, 0, .4)"}
        testID="search-icon-test"
      />
      <TextInput
        placeholderTextColor={colors?.placeholder}
        placeholder="Buscar por repositório ou tag"
        ref={inputFilterRef}
        testID="input-test"
        style={[
          styles.inputFilter,
          style,
          {
            backgroundColor: colors?.searchBarInput,
            color: colors?.text,
          },
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        editable={!disabled}
        {...props}
      />
      {focused && (
        <TouchableOpacity
          style={styles.cancel}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={props.onClear}
          testID="clear-test"
        >
          <Text style={{ color: colors?.text }}>Limpar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default InputFilter;
