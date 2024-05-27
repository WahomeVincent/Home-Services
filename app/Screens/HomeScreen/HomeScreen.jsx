import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Colors from '../../utils/Colors'
import Slider from './Slider'
import Categories from './Categories'
import BusinessLists from './BusinessLists'


export default function HomeScreen() {
  return (
    <View style={{backgroundColor:Colors.BACKGROUND, padding:10}}>
      <Header />
      <View style={{padding:10}}>
        <Slider />
        <Categories />
        <BusinessLists />
      </View>
    </View>
  )
}