import React from "react";
import styles from "../Auth.style";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface IUsername {
  onPress: () => void;
  onBack: () => void;
  setUsername: (username: string) => void;
  username: string;
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
        Digite seu Github
      </Text>
      <Input
        placeholder="Nome de usuario do GitHub"
        autoFocus
        onChangeText={(e) => setUsername(e)}
        value={username}
        Icon={(props: any) => (
          <AntDesign name="github" size={25} color="black" {...props} />
        )}
        onSubmitEditing={() => onPress()}
      />
      <Button
        onPress={() => onPress()}
        style={{
          marginTop: 15,
        }}
        loading={loading}
        text="Proximo"
      />
    </View>
  );
}

export default Username;
