import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import BusinessListItem from '../BusinessListByCategoryScreen/BusinessListItem'



export default function BookingScreen() {

const navigation = useNavigation()

const {user} = useUser()
const [bookings, setbookings] = useState()
const [loading, setLoading] = useState(false)

useEffect(() => {
getBookings()
},[user])

const getBookings = () => {
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then( resp => {
    setbookings(resp.bookings)
    setLoading(false)
  })
}
  return (
    <View>
      <Text style={{fontSize:22, fontWeight:'bold'}}>My Bookings</Text>

      <View>
        <FlatList 
          data={bookings}
          onRefresh={() => getBookings()}
          refreshing={loading}
          renderItem={({index, item}) => (
            <BusinessListItem 
              business={item?.businessList}
              booking={item}
            />
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