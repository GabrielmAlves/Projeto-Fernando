import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";

//import config from "../../config/config.json";

export default function () {
  const [emailCadastrado, setEmailCadastrado] = useState("");
  const [novaSenha, setNovaSenha] = useState("");//nova senha do usuário
  const [confirmaSenha, setConfirmaSenha] = useState("");

   async function changePassword() {
     let req = await fetch(config.urlRootNode + "alteraSenha", {
         method: "POST",
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
          novaSenhaUser: novaSenha,
          emailUser: emailCadastrado,
         }),
       });
     }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>

      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail já cadastrado"
          onChangeText={setEmailCadastrado}
          value={emailCadastrado}
        />
      </View>

      <View>
        <Text style={styles.label}>Nova senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha"
           //onChangeText={}
          value={novaSenha}
        />
      </View>

      <View>
        <Text style={styles.label}>Confirme a nova senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
           onChangeText={setNovaSenha}
          value={confirmaSenha}
        />
      </View>

      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.alterar} onPress={changePassword} >
          <Text style={styles.textAlterar}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
