import { StyleSheet, Text, TouchableOpacity, View, Linking, Button } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import config from "../../../config/config.json";
import styles from "./style";
//const navigation = useNavigation(); //vai fazer a navegação funcionar


export default function Descricao(props) {

  const [descricao, setDescricao] = useState("");


  async function description() {
    let req = await fetch(config.urlRootNode + "curso", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        desc: descricao,
      }),
    })
      .then((res) => res.json())
      .then((data) => setDescricao(data.cursos)); //onde setaria a descrição do curso clicado
  }
  
  return (
    <View style={styles.modalContainer}>
      <View>
        <Text style={styles.textoModal}>Clique no botão para ver a descrição!</Text>
        <Button style={styles.botaoModal} onPress={description}>Ver</Button>
      </View>
    
    </View>
  );
}
