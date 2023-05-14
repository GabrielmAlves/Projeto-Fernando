import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao"; 
import { useEffect, useState } from "react";
import config from "../../config/config.json";

export default function Videoaulas() {
  const [allVideoaulas, setAllVideoaulas] = useState([]);

  useEffect(() => {
    fetch(config.urlRootNode + "videoaulas")
     .then((res) => res.json())
      .then((json) =>{
        setAllVideoaulas(json.videoaulas)})
   
 }, []);
   return (
     <View style={styles.container}>
       <HeaderNavigacao back="Home" />
       {
         allVideoaulas.length > 0 ? (
           <View style={styles.contentArea}> 
         {   allVideoaulas.map(item => (
               <AcessoSecao titulo={item.titulo} url={item.url}/>
           ))}
       </View>
       )   :   <AvisoSemConteudo text="videoaulas" />
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
