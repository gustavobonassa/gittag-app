import React from "react";
import styles from "../Auth.style";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface IUsername {
  /**
   * next step function
   */
  onPress: () => void;
  /**
   * slide back function
   */
  onBack: () => void;
  /**
   * change username state
   */
  setUsername: (username: string) => void;
  /**
   * GitHub username field
   */
  username: string;
  /**
   */
  loading: boolean;
}

const Username = (props: IUsername) => {
  const {
    onBack,
    onPress,
    username,
    setUsername,
    loading,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => onBack()}
        style={styles.backLabel}
      >
        <Ionicons name="chevron-back" size={24} color="#555" />
        <Text style={styles.inputLabel}>Voltar</Text>
      </TouchableWithoutFeedback>

      <Text style={[styles.inputLabel, { marginTop: 20 }]}>
        Digite seu GitHub
      </Text>

      <Input
        placeholder="Nome de usuário do GitHub"
        autoFocus
        onChangeText={(e) => setUsername(e)}
        value={username}
        Icon={(iconProps: any) => (
          <AntDesign name="github" size={25} color="black" {...iconProps} />
        )}
        onSubmitEditing={() => onPress()}
      />

      <Button
        onPress={() => onPress()}
        style={{
          marginTop: 15,
        }}
        loading={loading}
        text="Próximo"
      />
    </View>
  );
}

export default Username;
