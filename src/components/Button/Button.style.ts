import { StyleSheet } from "react-native";

const elevation = 0;
const shadowProps = {
  shadowOffset: { width: 0, height: 2 },
  shadowColor: "black",
  shadowOpacity: .05,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009900",
    elevation,
    borderWidth: 0,
    ...shadowProps,
  },
  disabled: {
    backgroundColor: "rgba(160, 160, 160, .2)",
  },
  textDisabled: {
    color: "rgba(0, 0, 0, .3)",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
