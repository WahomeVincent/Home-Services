import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'

export default function BookingScreen() {

const {user} = useUser()

useEffect(() => {
getBookings()
},[])

const getBookings = () => {
  GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then( resp => {
    console.log('res', resp);
  })
}
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:22, fontWeight:'bold'}}>My Bookings</Text>
    </View>
  )
}