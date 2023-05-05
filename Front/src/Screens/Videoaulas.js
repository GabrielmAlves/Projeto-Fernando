import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";

export default function Videoaulas() {
  return (
    <View style={styles.container}>
      <AvisoSemConteudo text="videoaulas" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
