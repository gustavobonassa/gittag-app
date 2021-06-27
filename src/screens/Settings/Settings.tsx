import * as React from "react";
import store from "../../system/Store";

// import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, ScrollView, Switch } from "react-native";
import Button from "../../components/Button/Button";
import styles from "./Settings.style"
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { useTheme } from '@react-navigation/native';
import Colors from "../../constants/Colors";

function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = store.theme;
  const colorScheme = store.theme;
  const colors = Colors[colorScheme];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.repositoriesList }]}>
      <View style={styles.itemList}>
        <Text style={[styles.itemListText, { color: colors.text }]}>Modo escuro</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "light" ? "#f5dd4b" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            runInAction(() => {
              store.theme = theme === "dark" ? "light" : "dark";
            })
          }}
          value={theme === "dark"}
        />
      </View>
      <View
        style={{
          padding: 15,
        }}
      >
        <Button
          text="Sair"
          onPress={() => {
            runInAction(() => {
              store.token = "";
            })
          }}
          style={{
            backgroundColor: "#c70303",
          }}
        />
      </View>
    </ScrollView>
  );
}

export default observer(SettingsScreen);
