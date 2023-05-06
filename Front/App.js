import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Form from "./src/components/Formulario";
import CadastroCurriculo from "./src/Screens/CadastroCurriculo";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cursos from "./src/Screens/Cursos";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";
import Eventos from "./src/Screens/Eventos";
import Jogos from "./src/Screens/Jogos";
import Vagas from "./src/Screens/Vagas";
import VideoAulas from "./src/Screens/Videoaulas";
import EsqueciSenha from "./src/components/EsqueciSenha";

const stack = createNativeStackNavigator();

function MyStack() {
  return (
    <stack.Navigator>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="CadastroCurriculo" component={CadastroCurriculo} />
      <stack.Screen name="Cursos" component={Cursos} />
      <stack.Screen name="Eventos" component={Eventos} />
      <stack.Screen name="Jogos" component={Jogos} />
      <stack.Screen name="Vagas" component={Vagas} />
      <stack.Screen name="VideoAulas" component={VideoAulas} />
    </stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
