import {
  View, Text, StyleSheet, TextInput, Button
} from "react-native";
import React, { useState, useEffect } from "react";
import config from "../../../config/config.json";


export default function App() {
  const [instituicao, setInstituicao] = useState("");
  const [empresas, setEmpresas] = useState("");
  const [cursos, setCursos] = useState("");
  const [cargos, setCargos] = useState("");
  const [data, setData] = useState(null);

  async function createCV() {
    let req = await fetch(config.urlRootNode + "create", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instituicaoUser: instituicao,
        empresasUser: empresas,
        cursosUser: cursos,
        cargosUser: cargos,
      }),
    });
    
  }

  async function eraseCV(){
    let req = await fetch(config.urlRootNode + "erase", {
    method : "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        instituicaoUser: null,
        empresasUser: null,
        cursosUser: null,
        cargosUser: null,
    })
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currículo</Text>

      <Text style={styles.label}>Instituição de Ensino</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da sua instituição de ensino"
        onChangeText={setInstituicao}
        value={instituicao}
      />

      <Text style={styles.label}>Empresas Trabalhadas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome das empresas em que trabalhou"
        onChangeText={setEmpresas}
        value={empresas}
      />

      <Text style={styles.label}>Cursos Extras</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome dos cursos extras que fez"
        onChangeText={setCursos}
        value={cursos}
      />

      <Text style={styles.label}>Cargos Ocupados</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite os cargos que ocupou"
        onChangeText={setCargos}
        value={cargos}
      />

      <Button title="Deletar" style={styles.delete} onPress={eraseCV} />
      <Button title="Salvar" style={styles.save} onPress={createCV} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 16,
  },

  save: {
    fontSize: 16,
    marginTop: 16,
    color: "green",
    borderRadius: 8,
    width:"30%",
  },

  delete: {
    fontSize: 16,
    marginTop: 16,
    color: "red",
    borderRadius: 8,
    width:"30%",
  }
});