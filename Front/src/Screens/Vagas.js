import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao"; 
import AcessoSecao from "../components/AcessarSecao";
import { useEffect, useState } from "react";
import config from "../../config/config.json";
import stylesFilter from "../components/InputDeFiltro/style"
import Icons from "react-native-vector-icons/FontAwesome";


export default function Vagas() {
  const [allVagas, setAllVagas] = useState(fetch(config.urlRootNode + "vagas")
  .then((res) => res.json())
   .then((json) =>{
     json.vagas}));
  const [filtro, setFiltro] = useState("");



 async function busca() {
  let req = await fetch(config.urlRootNode + "buscaVaga", {
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
    .then((data) => setAllVagas(data.vagas));
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
          <TouchableOpacity onPress={busca}>
          <Icons name="search" size={25} color="orange"/>
          </TouchableOpacity>
        </View>

       {
         allVagas.length > 0 ? (
           <View style={styles.contentArea}> 
         {   allVagas.map(item => (
               <AcessoSecao titulo={item.titulo} url={item.url} logo={item.logo}/>
           ))}
       </View>
       )   :   <AvisoSemConteudo text="vagas" />
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
