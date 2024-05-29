import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import HomeNavigation from './HomeNavigation'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarInactiveTintColor:'#737373'
          }}>
            <Tab.Screen name="Home" component={HomeNavigation} 
              options={{
                tabBarLabel:({color}) => (
                  <Text style={{color:color}}>Home</Text>
                ),
                tabBarIcon:({color, size}) => (
                  <Ionicons name="home" size={24} color={color} />
                )
              }}

            />
            <Tab.Screen name="Booking" component={BookingScreen} 
              options={{
                tabBarLabel:({color}) => (
                  <Text style={{color:color}}>Booking</Text>
                ),
                tabBarIcon:({color, size}) => (
                  <FontAwesome5 name="bookmark" size={24} color={color} />                )
              }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
              options={{
                tabBarLabel:({color}) => (
                  <Text style={{color:color}}>Profile</Text>
                ),
                tabBarIcon:({color, size}) => (
                  <FontAwesome5 name="user" size={24} color={color} />
                )
              }}
            />
        </Tab.Navigator>
  );
}