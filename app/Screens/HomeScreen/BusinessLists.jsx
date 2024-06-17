import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import BusinessListItemSmall from './BusinessListItemSmall'


export default function BusinessLists() {

    const navigation = useNavigation()
    const [businessList, setBusinessList] = useState([])

    useEffect(()=> {
        getBusinessLists()
    }, [])

    const getBusinessLists = () => {
        GlobalApi.getBusinessList().then(resp => {
        // console.log(resp.businessLists);
        setBusinessList(resp.businessLists)
        })
    }
    

  return (
    <View>
        <View style={styles.heading}>
            <Heading text='Available Business'/>
            <Text style={{marginTop:10, color:'#6b6b47'}}>View All</Text>
        </View>
        <FlatList 
            data={businessList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <BusinessListItemSmall business={item}/>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})