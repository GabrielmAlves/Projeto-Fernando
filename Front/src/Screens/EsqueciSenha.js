import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import FormEsqueciSenha from "../components/FormEsqueciSenha";

export default function () {
  return (
    <View style={styles.container}>
      <FormEsqueciSenha />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});
