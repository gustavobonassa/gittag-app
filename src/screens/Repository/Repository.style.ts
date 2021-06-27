import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  addContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
    paddingBottom: 0,
  },
  plusButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#c145ff",
    marginLeft: 10,
    borderRadius: 5,
  },
  card: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ddd",
    padding: 15,
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
  itemTitle:{
    fontSize: 20,
    paddingRight: 38,
  },
  itemDescription:{
    fontSize: 16,
    paddingRight: 38,
  },
  division: {
    height: 1,
    backgroundColor: "#aaa",
    flex: 1,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: -5,
    width: "100%",
    flexWrap: "wrap",
  },
  tagItem: {
    backgroundColor: "#8d34ba",
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  tagText: {
    color: "white",
    fontSize: 18,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  infoItem: {
    flexDirection: "row",
    width: "33%",
    justifyContent: "center",
  },
  infoItemText: {
    fontSize: 18,
    marginLeft: 5,
    color: "#494949",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  }
});

export default styles;
