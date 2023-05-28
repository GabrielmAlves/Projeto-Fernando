import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import ButtonHome from "../components/ButtonHome";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import Icons from "react-native-vector-icons/FontAwesome";
import stylesNavigation from "../components/HeaderNavigacao/style"
import Modal from "../components/ModalSalvar"
export default function App() {
  const navigation = useNavigation(); //vai fazer a navegação funcionar
  
  return (
    <View style={styles.container}>
        <View style={stylesNavigation.navigationContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Icons
          style={stylesNavigation.btnNav}
          name="chevron-left"
          size={35}
          color="orange"
        />
      </TouchableOpacity> 
      <TouchableOpacity
      style={stylesNavigation.btnNav}
      
      >
        <Icons
          style={stylesNavigation.btnNav}
          name="user-circle"
          size={35}
          color="orange"
          
        />
        
      </TouchableOpacity>
    </View>
      <ScrollView>
        <ButtonHome
          text="Currículo"
          icon="address-card-o"
          screen="CadastroCurriculo"
        ></ButtonHome>
        <ButtonHome
          text="Cursos"
          icon="mortar-board"
          screen="Cursos"
        ></ButtonHome>
        <ButtonHome text="Eventos" icon="group" screen="Eventos"></ButtonHome>
        <ButtonHome text="Jogos" icon="gamepad" screen="Jogos"></ButtonHome>
        <ButtonHome text="Vagas" icon="info-circle" screen="Vagas"></ButtonHome>
        <ButtonHome
          text="Videoaulas"
          icon="laptop"
          screen="VideoAulas"
        ></ButtonHome>
      </ScrollView>
     {/* <Modal/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FFF",
  },
});
