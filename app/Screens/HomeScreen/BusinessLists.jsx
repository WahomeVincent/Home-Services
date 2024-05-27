import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Components/Heading'
import Colors from '../../utils/Colors'


export default function BusinessLists() {

    const [businessList, setBusinessList] = useState([])

    useEffect(()=> {
        getBusinessLists()
    }, [])

    const getBusinessLists = () => {
        GlobalApi.getBusinessList().then(resp => {
        //   console.log('res', resp.businessLists);
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
                <View style={styles.container}>
                    <Image source={{uri:item.images[0].url}} style={{width:150, height:100, borderWidth:1, borderRadius:10, borderColor:Colors.BACKGROUND}}/>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{item.category.name}</Text>
                    <Text style={{fontSize:12, color:Colors.GRAY}}>{item.name}</Text>
                    <Text style={{backgroundColor:Colors.PRIMARY, color:Colors.WHITE, marginTop:5, padding:4, borderRadius:5, width:100}}>{item.contactPerson}</Text>
                </View>
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
    },
    container:{
        flex:1,
        gap:2,
        marginTop:10,
        marginRight:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        padding:10
    }
})