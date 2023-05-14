import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao"; 

export default function Vagas() {
  const [allVagas, setAllVagas] = useState([]);

  useEffect(() => {
    fetch(config.urlRootNode + "vagas")
     .then((res) => res.json())
      .then((json) =>{
        setAllVagas(json.Vagas)})
   
 }, []);
   return (
     <View style={styles.container}>
       <HeaderNavigacao back="Home" />
       {
         allVagas.length > 0 ? (
           <View style={styles.contentArea}> 
         {   allVagas.map(item => (
               <AcessoSecao titulo={item.titulo} url={item.url}/>
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
