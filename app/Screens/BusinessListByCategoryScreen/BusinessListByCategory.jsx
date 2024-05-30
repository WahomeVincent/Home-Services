import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function BusinessListByCategory() {
  const param = useRoute().params;
  const navigation = useNavigation();


  useEffect(() => {
      console.log(param.category);
  }, [])
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:20, display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <FontAwesome5 name="arrow-left" size={24} color="black" />
        <Text style={{fontSize:22}}>{param.category}</Text>
      </TouchableOpacity>
    </View>
  )
}