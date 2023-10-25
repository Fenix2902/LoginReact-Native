import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/LoginScreen";
import { styles } from "./assets/styles/allstyles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import Settings from "./components/Settings";
import Chat from "./components/Chat";
import Mytabs from "./components/Mytabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mytabs">
        <Stack.Screen name='Mytabs' component={Mytabs} options={{title:'Menú'}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{title:'Inicio de Sesión'}}/>
        <Stack.Screen name='Home' component={HomeScreen}options={{title:'Pantalla Principal'}}/>
        <Stack.Screen name='Chat' component={Chat}options={{title:'Chat'}}/>
        <Stack.Screen name='Settings' component={Settings}options={{title:'Configuraciones'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
