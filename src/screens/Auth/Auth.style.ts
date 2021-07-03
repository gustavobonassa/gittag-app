import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
  },
  banner: {
    height: "60%",
    backgroundColor: "gray",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 20,
    color: "#555",
  },
  swiperContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  slideOneContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slideOneTitle: {
    fontSize: 30,
  },
  slideOneList: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 3,
    color: "#666"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

export default styles;
