import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Form from "./src/components/Formulario";
import CadastroCurriculo from "./src/Screens/CadastroCurriculo";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import Home from "./src/Screens/Home";


const stack = createNativeStackNavigator();

 function MyStack() {
  return (
      <stack.Navigator>
        <stack.Screen options = {{headerTransparent: false}}
        name="Login" component={Login}/>
          <stack.Screen
        name="Home" component={Home}/>
        <stack.Screen
        name="CadastroCurriculo" options = {{headerTransparent: false}} component={CadastroCurriculo}/>
         
      </stack.Navigator>
      
  
  );
}

export default function App(){
  return(
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
  )
}