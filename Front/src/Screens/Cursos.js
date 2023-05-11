import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao";
import AcessoSecao from "../components/AcessarSecao";
import { useEffect } from "react";
import config from "../../config/config.json";


export default function Cursos() {

  useEffect(() => {
    fetch(config.urlRootNode + "cursos")
      .then((res) => res.json())
      .then((json) => console.log(json.cursos));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderNavigacao back="Home" />
      <View style={styles.contentArea}>
        <AcessoSecao />
        <AcessoSecao />
        <AcessoSecao />
        <AcessoSecao />
      </View>

      {/* <AvisoSemConteudo text="cursos" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  contentArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    flexWrap: "wrap",
  },
});
