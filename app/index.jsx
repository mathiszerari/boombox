import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "../components/CustomButton"
import { router } from "expo-router"
import { images } from "../constants"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">

          <Image
            source={images.zidane}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.pnl}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl border text-white font-bold text-center">
              Zidane 
            </Text>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Exercitation nostrud amet ex voluptate proident mollit reprehenderit ut pariatur elit culpa.
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" hidden={false} style="light" />
    </SafeAreaView>
  )
}