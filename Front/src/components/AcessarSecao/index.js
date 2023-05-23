import { StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import config from "../../../config/config.json";
import { useState } from "react";
import DescricaoCurso from "../DescricaoCurso";

//const navigation = useNavigation(); //vai fazer a navegação funcionar


export default function AcessoSecao(props) {

  const [descricao, setDescricao] = useState("");

  const handlePress = () => {
    Linking.openURL(props.url);
  };

  // const minhaDescricao = () => {
  //   console.log('ola');
  //   <DescricaoCurso/>
  // };

  function teste(){
    console.log('ola');
  }
  
  return (
    <View style={styles.Container}>
      <View>
        <Image style={styles.img} source={require("../../../assets/x.jpeg")} />
      </View>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <View style={styles.containerBtns}>
        <TouchableOpacity onPress={teste}> 
          <Icons name="info-circle" size={35} color="orange"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} >
          <Icons name="arrow-right" size={35} color="orange"  />
        </TouchableOpacity>
      </View>
    </View>
  );
}
