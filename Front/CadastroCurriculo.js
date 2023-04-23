import {StyleSheet, Text, View} from "react-native";
import Title from "./src/components/Title";

export default function CadastroCurriculo() {
    return (
      <View style={styles.container}>
        <Title />
        <Text>Batata doce é uma merda.</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  });
  

