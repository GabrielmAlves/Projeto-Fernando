import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Icons from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function HeaderNavigacao(props) {
  const navigation = useNavigation(); //vai fazer a navegação funcionar

  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(props.back);
        }}
      >
        <Icons
          style={styles.btnNav}
          name="chevron-left"
          size={35}
          color="orange"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons
          style={styles.btnNav}
          name="user-circle"
          size={35}
          color="orange"
        />
      </TouchableOpacity>
    </View>
  );
}
