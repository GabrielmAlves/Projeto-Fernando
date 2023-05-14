import { StyleSheet, Text, View } from "react-native";
import AvisoSemConteudo from "../components/SemConteudo";
import HeaderNavigacao from "../components/HeaderNavigacao"; 

export default function Eventos() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
   fetch(config.urlRootNode + "eventos")
    .then((res) => res.json())
     .then((json) =>{
     setAllEvents(json.eventos)})
  
}, []);
  return (
    <View style={styles.container}>
      <HeaderNavigacao back="Home" />
      {
        allEvents.length > 0 ? (
          <View style={styles.contentArea}> 
        {   allEvents.map(item => (
              <AcessoSecao titulo={item.titulo} url={item.url}/>
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
