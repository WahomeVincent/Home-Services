import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import GlobalApi from '../../utils/GlobalApi'
import Colors from '../../utils/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';



export default function BusinessListByCategory() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [businessList, setBusinessList] = useState([])

  useEffect(()=> {
      param&&getBusinessByCategory()
  }, [param])

  const getBusinessByCategory = () => {
      GlobalApi.getBusinessListByCategory(param.category)
        .then(resp => {
        // console.log(resp.businessLists);
      setBusinessList(resp.businessLists)
      })
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:20, display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <FontAwesome5 name="arrow-left" size={24} color="black" />
        <Text style={{fontSize:22, fontWeight:'bold'}}>{param.category}</Text>
      </TouchableOpacity>

      {businessList.length>0 ?  <FlatList
        data={businessList}
        renderItem={({item, index}) => (
          <View style={styles.container}>
                <Image source={{uri:item.images[0].url}} style={{objectFit:'fill', width:130, height:110, borderWidth:1, borderRadius:10, borderColor:Colors.BACKGROUND}}/>
                <View style={styles.containerText}>
                  <Text style={{fontSize:16, color:Colors.GRAY}}>{item.name}</Text>
                  <Text style={{fontSize:22, fontWeight:'bold'}}>{item.category.name}</Text>
                  <View style={styles.location}>
                    <Ionicons name="location-outline" size={20} color={Colors.PRIMARY} />
                    <Text style={{fontSize:16, color:Colors.GRAY}}>{item.address}</Text>
                  </View>
                </View>
          </View>
        )}
      /> : 
      <>
        <View style={styles.defaultText}>
          <Text style={{fontSize:25, fontWeight:'bold', color:Colors.PRIMARY}}>Sorry,</Text>
          <Text style={{fontSize:15, color:Colors.GRAY}}> No business Available at the moment.</Text>
        </View>
      </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    backgroundColor:Colors.WHITE,
    padding:10,
    marginHorizontal:15,
    borderRadius:15
  },
  containerText:{
    display:'flex',
    gap:5,
    justifyContent:'space-evenly'
  },
  location:{
    display:'flex',
    flexDirection:'row',
    gap:6
  },
  defaultText:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    marginTop:100
  }
})