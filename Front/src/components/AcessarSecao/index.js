import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


//const navigation = useNavigation(); //vai fazer a navegação funcionar


export default function AcessoSecao(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Image style={styles.img} source={require("../../../assets/x.jpeg")} />
      </View>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <View style={styles.containerBtns}>
        <TouchableOpacity> 
          <Icons name="info-circle" size={35} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Icons name="arrow-right" size={35} color="orange"  />
        </TouchableOpacity>
      </View>
    </View>
  );
}
