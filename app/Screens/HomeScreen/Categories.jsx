import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../utils/GlobalApi'
import Colors from '@/app/utils/Colors'


export default function Categories() {

    const [category, setCategory] = useState([])
    useEffect(()=> {
        getCategories()
    }, [])
    const getCategories = () => {
        GlobalApi.getCategory().then(resp => {
        //   console.log('res', resp?.categories);
        setCategory(resp.categories)
        })
    }
  
  return (
    <View>
        <View style={styles.heading}>
            <Heading text='Categories'/>
            <Text style={{marginTop:10, color:'#6b6b47'}}>View All</Text>
        </View>
        <FlatList 
            data={category}
            numColumns={4}
            renderItem={({item,index}) =>  (
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image source={{uri:item.icon.url}} style={{width:30, height:30}}/>
                    </View>
                    <Text style={{fontWeight:'bold', marginTop:5}}>{item.name}</Text>
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
        alignItems:'center',
        marginTop:10
    },
    iconContainer:{
        flex:1,
        padding:12,
        backgroundColor:Colors.WHITE,
        borderRadius:99
      },

})
