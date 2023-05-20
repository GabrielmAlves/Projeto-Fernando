import { StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import config from "../../../config/config.json";

//const navigation = useNavigation(); //vai fazer a navegação funcionar


export default function AcessoSecao(props) {

  const [descricao, setDescricao] = useState("");

  const handlePress = () => {
    Linking.openURL(props.url);
  };


  async function descricao() {
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
    <View style={styles.Container}>
      <View>
        <Image style={styles.img} source={require("../../../assets/x.jpeg")} />
      </View>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <View style={styles.containerBtns}>
        <TouchableOpacity> 
          <Icons name="info-circle" size={35} color="orange" onPress={descricao} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} >
          <Icons name="arrow-right" size={35} color="orange"  />
        </TouchableOpacity>
      </View>
    </View>
  );
}
