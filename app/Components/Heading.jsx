import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text}) {
  return (
    <View>
        <Text style={styles.heading}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
    heading:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10
  }})