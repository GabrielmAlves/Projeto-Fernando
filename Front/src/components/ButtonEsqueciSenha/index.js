import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Icons from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export default function App(props) {
  const navigation = useNavigation(); //vai fazer a navegação funcionar

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(props.screen);
      }}
    >
      <Text style={styles.esqueciSenha}>Esqueci minha senha!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    width: "40%",
    height: 70,
    marginBottom: 10,
    marginHorizontal: "1.8%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FF7D26",
  },
  text: {
    fontSize: 12,
    color: "#FFF",
  },
  esqueciSenha: {
    color: "orange",
    marginBottom: 40,
  },
});
