import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 7,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 25,
    top: 18,
  },
  inputFilter: {
    flex: 1,
    height: 40,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingLeft: 40,
    backgroundColor: "rgba(0, 0, 0, 0.07)",
    borderRadius: 20,
  },
  cancel: {
    marginLeft: 10,
  },
  cancelText: {
    color: "blue",
  },
});

export default styles;
