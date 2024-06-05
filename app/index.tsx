import { Link } from "expo-router";
import { StyleSheet, Text, StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Boombox</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})