import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function BookingScreen() {

const {user} = useUser()
const [bookings, setbookings] = useState()
const [loading, setLoading] = useState(false)

useEffect(() => {
getBookings()
},[user])

const getBookings = () => {
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then( resp => {
    // console.log(resp.bookings);
    setbookings(resp.bookings)
    setLoading(false)
  })
}
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:22, fontWeight:'bold'}}>My Bookings</Text>

      <View>
        <FlatList 
          data={bookings}
          onRefresh={() => getBookings()}
          refreshing={loading}
          renderItem={({index, item}) => (
            <View style={styles.container}>
                <Image source={{uri:item.businessList?.images[0].url}} style={{objectFit:'fill', width:130, height:110, borderWidth:1, borderRadius:10, borderColor:Colors.BACKGROUND}}/>
                <View style={styles.containerText}>
                  <Text style={{fontSize:16, color:Colors.GRAY}}>{item.businessList?.name}</Text>
                  <Text style={{fontSize:22, fontWeight:'bold'}}>{item.businessList?.contactPerson}</Text>

                    <Text>{item.bookingStatus}</Text>
                  <View style={styles.location}>
                    <FontAwesome name="calendar" size={14} style={{color:Colors.PRIMARY}} />
                    <Text style={{fontSize:10, color:Colors.GRAY}}>{item.date}</Text>
                    <Text style={{fontSize:10, color:Colors.GRAY}}>at {item.time}</Text>
                  </View>
                </View>
            </View>
          )}
        />
      </View>
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
    borderRadius:15,
    marginVertical:10
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
  },
  defaultText:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    marginTop:100
  }
})