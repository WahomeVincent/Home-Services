import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../utils/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function BusinessListItem({business, booking}) {
    const navigation = useNavigation();


  return (
    <View>
       <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('business-detail', 
            {business: business})}>
                <Image source={{uri:business?.images[0].url}} style={{objectFit:'fill', width:130, height:110, borderWidth:1, borderRadius:10, borderColor:Colors.BACKGROUND}}/>
                <View style={styles.containerText}>
                    <Text style={{fontSize:16, color:Colors.GRAY ,borderWidth:2, borderColor:Colors.PRIMARY, paddingHorizontal:5, borderRadius:10, textAlign:'center', width:120}}>{business?.name}</Text>
                    <Text style={{fontSize:22, fontWeight:'bold'}}>{business.contactPerson}</Text>
                  
                    {!booking ?
                        <View style={styles.location}>
                            <Ionicons name="location-outline" size={20} color={Colors.PRIMARY} />
                            <Text style={{fontSize:16, color:Colors.GRAY}}>{business.address}</Text>
                        </View>
                    : null}

                {booking?.id ?
                <View>
                    <Text>Booked</Text>
                    <View style={styles.location}>
                        <FontAwesome name="calendar" size={14} style={{color:Colors.PRIMARY}} />
                        <Text style={{fontSize:10, color:Colors.GRAY}}>{booking.date}</Text>
                        <Text style={{fontSize:10, color:Colors.GRAY}}>at {booking.time}</Text>
                    </View>
                </View>

                 : null
                 }
                
                </View>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        backgroundColor:Colors.WHITE,
        marginHorizontal:15,
        marginVertical:6,
        padding:20,
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
        gap:6,
        alignItems:'center'
      }
})