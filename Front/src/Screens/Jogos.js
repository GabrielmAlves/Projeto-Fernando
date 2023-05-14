import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao";
import { useEffect, useState } from "react";
import config from "../../config/config.json";

export default function Jogos() {

  const [allJogos, setAllJogos] = useState([]);

  useEffect(() => {
    fetch(config.urlRootNode + "jogos")
     .then((res) => res.json())
      .then((json) =>{
        setAllJogos(json.jogos)})
   
 }, []);
   return (
     <View style={styles.container}>
       <HeaderNavigacao back="Home" />
       {
         allJogos.length > 0 ? (
           <View style={styles.contentArea}> 
         {   allJogos.map(item => (
               <AcessoSecao titulo={item.titulo} url={item.url}/>
           ))}
       </View>
       )   :   <AvisoSemConteudo text="jogos" />
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
