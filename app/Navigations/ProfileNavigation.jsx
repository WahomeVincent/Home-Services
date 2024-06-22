import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ContactUsScreen from '../Screens/ContactUsScreen/ContactUsScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();


export default function BookingNavigation() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="contact-us" component={ContactUsScreen} />
   </Stack.Navigator>
  )
}