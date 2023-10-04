import { View, Text } from "react-native";
export default function HomeScreen({navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>'Bienvenido....',{route.params.email}</Text>
      </View>
    );
  }