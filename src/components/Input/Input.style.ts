import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: 8,
    top: 12,
  },
  inputSearch: {
    paddingLeft: 35,
  },
  search: {
    fontSize: 25,
    position: "absolute",
    color: "rgba(0, 0, 0, .3)",
    left: 10,
  },
  disabled: {
    backgroundColor: "rgba(0, 0, 0, .05)",
    color: "rgba(0, 0, 0, .3)",
  },
  input: Platform.select({
    ios: {
      width: "100%",
      paddingVertical: 10,
      fontSize: 18,
      paddingHorizontal: 10,
      color: "rgba(0, 0, 0, .75)",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'transparent',
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    android: {
      width: "100%",
      paddingVertical: 10,
      fontSize: 18,
      paddingHorizontal: 10,
      color: "rgba(0, 0, 0, .75)",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, .2)',
    }
  }),
  errorMessage: {
    color: "red",
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    marginTop: 5,
    width: '100%',
  },
  error: {
    borderColor: "red",
  },
});

export default styles;
