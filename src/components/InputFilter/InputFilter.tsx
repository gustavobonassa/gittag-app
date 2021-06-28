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
  dark?: boolean;
  style?: StyleProp<TextStyle>;
  inputFilterRef?: any;
  disabled?: boolean;
  error?: string;
  mask?: string;
  onClear?: () => void;
  styleContainer?: StyleProp<ViewStyle>;
  colors?: any;
}

function InputFilter(props: IInputFilter) {
  const { inputFilterRef, style, styleContainer, dark, colors } = props;

  const [focused, setFocused] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        styleContainer,
        {
          backgroundColor: colors.searchBar,
        },
      ]}
    >
      <FontAwesome
        name="search"
        size={17}
        style={styles.icon}
        color={dark ? "#fff" : "rgba(0, 0, 0, .4)"}
      />
      <TextInput
        placeholderTextColor={colors.placeholder}
        placeholder="Buscar por repositório ou tag"
        ref={inputFilterRef}
        style={[
          styles.inputFilter,
          style,
          {
            backgroundColor: colors.searchBarInput,
            color: colors.text,
          },
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {focused && (
        <TouchableOpacity
          style={styles.cancel}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={props.onClear}
        >
          <Text style={{ color: colors.text }}>Limpar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default InputFilter;
