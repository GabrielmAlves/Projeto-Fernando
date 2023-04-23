import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Form from "./src/components/Formulario";
import CadastroCurriculo from "./src/Screens/CadastroCurriculo";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "./src/Screens/tela_login";


const stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <stack.Navigator initialRouteName="tela_login">
        <stack.Screen
        name="tela_login" component={TelaLogin}/>
         <stack.Screen
        name="CadastroCurriculo" component={CadastroCurriculo}/>
         
      </stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
