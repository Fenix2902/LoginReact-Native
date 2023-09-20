import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/LoginScreen";
import { styles } from "./assets/styles/allstyles";

export default function App() {
  return (
    <View style={styles.container}>
      {/* // <Text>Open up App.js to start working on your app!</Text> */}
      <LoginScreen />
    </View>
  );
}
