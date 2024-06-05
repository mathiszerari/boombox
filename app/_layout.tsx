import { Slot, Stack } from 'expo-router'
import { Text } from 'react-native-reanimated/lib/typescript/Animated'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout