import {StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";
import FormCurriculo from "../components/FormCurriculo"

export default function CadastroCurriculo() {
    return (
      <View style={styles.container}>
        <Title>Cadastre seu currículo:</Title>
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
  

