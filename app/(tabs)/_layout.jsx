import { Tabs } from 'expo-router'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { icons } from '../../constants'
import * as Haptics from 'expo-haptics';
import React from 'react'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text 
        className={`${focused ? 'font-psemibold text-white' : 'font-pregular'} text-xs text-blue-500`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  const handlePress = async (navigate) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigate();
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          }
        }}>
        
        {/* Home */}
        <Tabs.Screen name='home'
          options={({ navigation }) => ({
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TouchableOpacity 
                onPress={() => handlePress(() => navigation.navigate('home'))}
              >
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name='Home'
                  focused={focused}
                />
              </TouchableOpacity>
            )
          })}
        />

        {/* Search */}
        <Tabs.Screen name='search'
          options={({ navigation }) => ({
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TouchableOpacity 
                onPress={() => handlePress(() => navigation.navigate('search'))}
              >
                <TabIcon
                  icon={icons.search}
                  color={color}
                  name='Search'
                  focused={focused}
                />
              </TouchableOpacity>
            )
          })}
        />

        {/* Profile */}
        <Tabs.Screen name='profile'
          options={({ navigation }) => ({
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TouchableOpacity 
                onPress={() => handlePress(() => navigation.navigate('profile'))}
              >
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name='Profile'
                  focused={focused}
                />
              </TouchableOpacity>
            )
          })}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout