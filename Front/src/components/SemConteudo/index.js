import { StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

export default function App(props) {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Aviso</Text>
      <Icons name="close" size={100} color={"#FA0303"} />
      <Text style={styles.subTitulo}>
        Ainda não existem {props.text} cadastradas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 16,
  },
});
