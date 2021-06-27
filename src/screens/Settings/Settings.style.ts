import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    marginBottom: 10,
    alignItems: "center",
  },
  itemListText: {
    fontSize: 16,
  }
});

export default styles;
