import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    rowGap: 20,
    marginTop: 20,
  },

  label: {
    fontSize: 12.5,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 7,
    height: 52,
  },

  save: {
    backgroundColor: "#09E020",
    padding: 8,
    borderRadius: 8,
    width: "28%",
  },

  delete: {
    backgroundColor: "#FA0303",
    borderRadius: 8,
    width: "28%",
    padding: 8,
  },

  update: {
    backgroundColor: "#0286FA",
    borderRadius: 8,
    width: "28%",
    padding: 8,
  },

  textUpdate: {
    color: "#FFF",
    textAlign: "center",
  },

  textDelete: {
    color: "#FFF",
    textAlign: "center",
  },

  textSave: {
    color: "#FFF",
    textAlign: "center",
  },

  viewButtons: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 40,
    justifyContent: "space-between",
  },
});
