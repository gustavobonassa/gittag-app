import React from "react";
import styles from "../Auth.style";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface IPassword {
  onPress: () => void;
  onBack: () => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  password: string;
  confirmPassword: string;
  loading: boolean;
  isNewUser: boolean;
}

const Password = (props: IPassword) => {
  const {
    onBack,
    onPress,
    password,
    setPassword,
    loading,
    isNewUser,
    setConfirmPassword,
    confirmPassword,
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
      <Text style={[styles.inputLabel, { marginTop: 20 }]}>Senha</Text>
      <Input
        placeholder="Digite sua senha"
        autoFocus
        onChangeText={(e) => setPassword(e)}
        value={password}
        secureTextEntry
      />
      {isNewUser && (
        <>
          <Text style={[styles.inputLabel, { marginTop: 20 }]}>
            Confirme sua senha
          </Text>
          <Input
            placeholder="Confirme sua senha"
            onChangeText={(e) => setConfirmPassword(e)}
            value={confirmPassword}
            secureTextEntry
          />
        </>
      )}
      <Button
        onPress={() => onPress()}
        style={{
          marginTop: 15,
        }}
        loading={loading}
        text={isNewUser ? "Criar conta" : "Entrar"}
      />
    </View>
  );
}

export default Password;
