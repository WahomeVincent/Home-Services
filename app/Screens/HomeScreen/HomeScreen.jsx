import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Colors from '../../utils/Colors'


export default function HomeScreen() {
  return (
    <View style={{backgroundColor:Colors.BACKGROUND}}>
      <Header />
    </View>
  )
}