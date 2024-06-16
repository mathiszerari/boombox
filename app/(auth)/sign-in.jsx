import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',  
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => { 
    console.log(form);
  }

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View
          className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain" />
          <Text className="text-2xl text-white font-semibold mt-10">
            Sign In to Zidane
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn