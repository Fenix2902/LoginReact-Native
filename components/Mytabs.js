import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons'
import  HomeScreen  from "./HomeScreen";
import  Settings  from "./Settings";
import LoginScreen from "./LoginScreen";
import Chat from "./Chat";


const Tab = createBottomTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'gray',//si no se utiliza el boton 
        tabBarActiveTintColor: '#8844FA', //si se utiliza el boton
        tabBarActiveBackgroundColor: '#BBEDF3'
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=>(<MaterialIcons name="home" size='22' color='black'/>)}}/>
      <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon:()=>(<MaterialIcons name="settings" size={'22'} color={'black'}/>)}} />
      <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon:()=>(<MaterialIcons name="message" size={'22'} color={'black'}/>)}} />
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarStyle:{display:"none"},tabBarIcon:()=>(<MaterialIcons name="person" size={'22'} color={'black'}/>)}}/>
    </Tab.Navigator>
  );
}
