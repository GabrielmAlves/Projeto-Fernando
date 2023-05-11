import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import config from "../../../config/config.json";
import styles from "./style";

export default function App() {
  const [instituicao, setInstituicao] = useState("");
  const [empresas, setEmpresas] = useState("");
  const [cursos, setCursos] = useState("");
  const [cargos, setCargos] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(config.urlRootNode + "curriculo")
      .then((res) => res.json())
      .then((json) => setInstituicao(json.instituicao));
    fetch(config.urlRootNode + "curriculo")
      .then((res) => res.json())
      .then((json) => setEmpresas(json.empresas));
    fetch(config.urlRootNode + "curriculo")
      .then((res) => res.json())
      .then((json) => setCursos(json.cursos));
    fetch(config.urlRootNode + "curriculo")
      .then((res) => res.json())
      .then((json) => setCargos(json.cargos));
  }, []);

  async function createCV() {
    let req = await fetch(config.urlRootNode + "create", {
      method: "POST",
      headers: {
        Accept: "application/json",
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

  async function eraseCV() {
    let req = await fetch(config.urlRootNode + "delete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instituicaoUser: instituicao,
        empresasUser: empresas,
        cursosUser: cursos,
        cargosUser: cargos,
      }),
    });
    setInstituicao("");
    setCargos("");
    setCursos("");
    setEmpresas("");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Instituição de Ensino</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da sua instituição de ensino"
          onChangeText={setInstituicao}
          value={instituicao}
        />
      </View>

      <View>
        <Text style={styles.label}>Empresas Trabalhadas</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome das empresas em que trabalhou"
          onChangeText={setEmpresas}
          value={empresas}
        />
      </View>

      <View>
        <Text style={styles.label}>Cursos Extras</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome dos cursos extras que fez"
          onChangeText={setCursos}
          value={cursos}
        />
      </View>

      <View>
        <Text style={styles.label}>Cargos Ocupados</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite os cargos que ocupou"
          onChangeText={setCargos}
          value={cargos}
        />
      </View>

      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.update} onPress={createCV}>
          <Text style={styles.textUpdate}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.delete} onPress={eraseCV}>
          <Text style={styles.textDelete}>Deletar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.save} onPress={createCV}>
          <Text style={styles.textSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
