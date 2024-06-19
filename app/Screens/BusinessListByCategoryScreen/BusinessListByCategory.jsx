import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import GlobalApi from '../../utils/GlobalApi'
import Colors from '../../utils/Colors'
import BusinessListItem from './BusinessListItem'

export default function BusinessListByCategory({business}) {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [businessList, setBusinessList] = useState([])
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(()=> {
      param && getBusinessByCategory()
  }, [param])

  const getBusinessByCategory = () => {
      setLoading(true); // Start loading
      GlobalApi.getBusinessListByCategory(param.category)
        .then(resp => {
        setBusinessList(resp.businessLists)
      })
      .finally(() => setLoading(false)); // End loading
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:20, display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <FontAwesome5 name="arrow-left" size={24} color="black" />
        <Text style={{fontSize:22, fontWeight:'bold'}}>{param.category}</Text>
      </TouchableOpacity>

      <TouchableOpacity >
          {loading ? (
            <ActivityIndicator size="large" color={Colors.PRIMARY} style={{marginTop:100}} />
          ) : (
            businessList.length > 0 ?  
              <FlatList
                data={businessList}
                renderItem={({item, index}) => (
                  <BusinessListItem business={item}/>
                )}
              /> : 
              <View style={styles.defaultText}>
                <Text style={{fontSize:25, fontWeight:'bold', color:Colors.PRIMARY}}>Sorry,</Text>
                <Text style={{fontSize:15, color:Colors.GRAY}}> No business Available at the moment.</Text>
              </View>
          )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  defaultText:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    marginTop:100
  }
})

