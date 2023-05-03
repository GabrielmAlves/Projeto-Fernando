import { StyleSheet, Text, View,ScrollView } from "react-native";
import Title from "../components/Title";
import ButtonHome from "../components/ButtonHome"
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native"; 
export default function App() { 
    const navigation = useNavigation(); //vai fazer a navegação funcionar

 
  return (
    <View style={styles.container}>
<ScrollView >
<ButtonHome text="Currículo" icon="address-card-o" screen ="CadastroCurriculo"></ButtonHome>
        <ButtonHome text="Cursos" icon="mortar-board"></ButtonHome>
        <ButtonHome text="Eventos" icon="group"></ButtonHome>
        <ButtonHome text="Jogos" icon="gamepad"></ButtonHome>
        <ButtonHome text="Vagas" icon="info-circle"></ButtonHome>
        <ButtonHome text="Videoaulas" icon="laptop"></ButtonHome>
</ScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
    backgroundColor:"#EEE"
  },
  
});
