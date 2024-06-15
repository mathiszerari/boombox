import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-white font-medium">{title}</Text>
      
      <View
        className="border-2 border-gray-500 w-full h-16 px-4 bg-gray-900 rounded-2xl focus:border-orange-500 items-center flex-row">
        <TextInput
          className="flex-1 w-full text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {form.password.length > 0 && title === 'Password' && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyehide : icons.eye}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField