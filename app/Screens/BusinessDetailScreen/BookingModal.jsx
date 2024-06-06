import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import CalendarPicker from "react-native-calendar-picker";



export default function BookingModal({hideModal}) {
  return (
    <View>
      <TouchableOpacity  style={{position:'absolute', top:10, left:20}} onPress={() => hideModal()} >
          <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <View style={{marginVertical:40, padding:20}}>
          <CalendarPicker />
      </View>
    </View>
  )
}