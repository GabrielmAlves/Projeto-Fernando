import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import styles from "./style";

export default function AcessoSecao(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Image style={styles.img} source={require("../../../assets/x.jpeg")} />
      </View>
      <View style={styles.containerBtns}>
        <TouchableOpacity>
          <Icons name="info-circle" size={35} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="arrow-right" size={35} color="orange" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
