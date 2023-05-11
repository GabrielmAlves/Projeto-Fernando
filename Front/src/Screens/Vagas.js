import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao";

export default function Vagas() {
  return (
    <View style={styles.container}>
      <HeaderNavigacao back="Home" />
      <AvisoSemConteudo text="vagas" />
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
});
