import { FlatList, StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao";
import AcessoSecao from "../components/AcessarSecao";
import { useEffect, useState } from "react";
import config from "../../config/config.json";


export default function Cursos() {
  
  const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
     fetch(config.urlRootNode + "cursos")
      .then((res) => res.json())
       .then((json) =>{
       setAllCourses(json.cursos)})
    
  }, []);

  return (
    <View style={styles.container}>
      <HeaderNavigacao back="Home" />
    
      {
        allCourses.length > 0 ? (
          <View style={styles.contentArea}> 
        {   allCourses.map(item => (
              <AcessoSecao titulo={item.titulo} url={item.url}/>
          ))}
      </View>
      )   :   <AvisoSemConteudo text="cursos" />
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
  contentArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    flexWrap: "wrap",
  },
});
