import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemLeft: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemRight: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
    width: "100%",
    paddingRight: 10,
  },
  itemTitle:{
    fontSize: 20,
    fontWeight: "bold",
  },
  itemDescription:{
    fontSize: 16,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
  },
  tagItem: {
    backgroundColor: "#8d34ba",
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
  },
  tagText: {
    color: "white",
  }
});

export default styles;
