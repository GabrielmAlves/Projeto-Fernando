import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao"; 
import AcessoSecao from "../components/AcessarSecao";
import { useEffect, useState } from "react";
import config from "../../config/config.json";
import stylesFilter from "../components/InputDeFiltro/style"
import Icons from "react-native-vector-icons/FontAwesome";


export default function Eventos() {
  const [allEvents, setAllEvents] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
   fetch(config.urlRootNode + "eventos")
    .then((res) => res.json())
     .then((json) =>{
     setAllEvents(json.eventos)}) 
  
}, []);

async function busca() {
  let req = await fetch(config.urlRootNode + "buscaEvento", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filtroBusca: filtro,
    }),
  })
    .then((res) => res.json())
    .then((data) => setAllEvents(data.eventos));
}

  return (
    <View style={styles.container}>
      <HeaderNavigacao back="Home" />
      <View style={stylesFilter.FilterArea}>
          <TextInput
            style={stylesFilter.formFilter}
            placeholder="Faça uma pesquisa"
            onChangeText={(text) => setFiltro(text)}
          />
          <TouchableOpacity onPress={busca} >
          <Icons name="search" size={25} color="orange"/>
          </TouchableOpacity>
        </View>

      {
        allEvents.length > 0 ? (
          <View style={styles.contentArea}> 
        {   allEvents.map(item => (
              <AcessoSecao titulo={item.titulo} url={item.url} logo={item.logo}/>
          ))}
      </View>
      )   :   <AvisoSemConteudo text="eventos" />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
});
