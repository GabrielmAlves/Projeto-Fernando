import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    marginTop: 20,
    maxWidth: 147,
  },
  img: {
    width: 145,
    height: 110,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  containerBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titulo:{
    textAlign:"center",
    fontSize:16,
    color:"orange"
  }
});
