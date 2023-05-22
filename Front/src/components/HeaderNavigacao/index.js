import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Icons from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function HeaderNavigacao(props) {
  const navigation = useNavigation(); //vai fazer a navegação funcionar
  const [dropdownOpen, setDropdownOpen] = useState(false); //dropdownMenu


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
      <TouchableOpacity
      onPress={() => setDropdownOpen(!dropdownOpen)}
      style={styles.btnNav}
      >
        <Icons
          style={styles.btnNav}
          name="user-circle"
          size={35}
          color="orange"
        />
        {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text>Alterar Senha</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Icons name="sign-out" size={35} color="orange"/><Text>Sair</Text>
            </TouchableOpacity>
            
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
