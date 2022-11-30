import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    flex: 1,
    width: "90%",
    minHeight: 70,
    margin: 5,
  },
  title: {
    color: "#edebeb",
    margin: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    width: 200,
  },
  date: {
    fontSize: 11,
    color: '#585757',
    position: 'absolute',
    bottom: 1,
    right: 12,
  },

  button: {
    width: 30,
  },
});
