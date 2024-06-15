import { Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-white font-medium">{title}</Text>
      
      <View
        className="border-2 border-gray-500 w-full h-16 px-4 bg-gray-900 rounded-2xl focus:border-orange-500 items-center">
        <TextInput
          className="flex-1 w-full text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField