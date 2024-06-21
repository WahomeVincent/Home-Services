import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'


export default function BusinessListItemSmall({business}) {
    const navigation = useNavigation()
   

  return (
    <View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('business-detail', {business: business})}>
            <Image source={{uri:business.images[0].url}} style={{width:160, height:100, borderWidth:1, borderRadius:10, borderColor:Colors.BACKGROUND}}/>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{business.name}</Text>
            <Text style={{fontSize:12, color:Colors.GRAY }}>{business.category.name}</Text>
            <Text style={{backgroundColor:Colors.PRIMARY, color:Colors.WHITE, marginTop:5, padding:4, borderRadius:5, width:100}}>{business.contactPerson}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginRight:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        padding:10
    }
})