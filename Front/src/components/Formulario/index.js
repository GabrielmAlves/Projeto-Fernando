import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-btr";
import React, { useState, useEffect } from "react";
import config from "../../../config/config.json";
import Icons from "react-native-vector-icons/FontAwesome";
import CadastroCurriculo from "./CadastroCurriculo";

export default function App({navigation}) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [hidePassword, setHidePassoword] = useState(true);

  async function loginUser() {
    let req = await fetch(config.urlRootNode + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailUser: email,
        senhaUser: senha,
      }),
    });
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Preencha este campo com o seu e-mail"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.formLabel}>Senha</Text>
        <View style={styles.passwordArea}>
          <TextInput
            style={styles.formPassword}
            placeholder="Preencha este campo com a sua senha"
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity
            onPress={() => {
              setHidePassoword(!hidePassword);
            }}
            style={styles.eyeIcon}
          >
            {hidePassword ? (
              <Icons name="eye" color="#000" size={25} />
            ) : (
              <Icons name="eye-slash" color="#000" size={25} />
            )}
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.noShare}>
          Não compartilhe este campo com ninguém
        </Text> */}
        <Text style={styles.semConta}>
          Sem conta? Entre em contato com o órgão responsável
        </Text>

        <View style={styles.containerEsqueciSenha}>
          <View style={styles.habilitarContainer}>
            <CheckBox />
            <Text style={styles.textHabilitar}>Habilitar Leitor</Text>
          </View>
          <Text style={styles.esqueciSenha}>Esqueci minha senha!</Text>
        </View>
        <Button title="Entrar" color="#FFA500" onPress={(loginUser) => {
          if(loginUser){
            navigation.navigate("CadastroCurriculo");
          }
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 20,
    padding: 5,
  },
  formLabel: {
    fontSize: 15,
  },
  formInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    height: 45,
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 5,
  },
  form: {
    width: "100%",
    height: "auto",
    padding: 10,
  },
  semConta: {
    marginBottom: 20,
    marginTop: 10,
  },
  noShare: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerEsqueciSenha: {
    flexDirection: "row",
    columnGap: 80,
  },
  habilitarContainer: {
    flexDirection: "row",
    columnGap: 3,
    marginBottom: 10,
    height: 20,
  },
  esqueciSenha: {
    color: "orange",
    marginBottom: 40,
  },
  passwordArea: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    height: 45,
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 5,
    alignItems: "center",
  },
  formPassword: {
    width: "88%",
  },
  eyeIcon: {
    width: "12%",
    justifyContent: "center",
  },
});
