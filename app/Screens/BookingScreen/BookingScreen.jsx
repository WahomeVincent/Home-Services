import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
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
      <Text style={{fontSize:22, fontWeight:'bold', padding:20}}>My Bookings</Text>
      {loading ? 
        <ActivityIndicator size="large" color={Colors.PRIMARY} style={{marginTop:100}}/>
        :
      <>
      {bookings ?
      <View>
        <FlatList 
          data={bookings}
          onRefresh={() => getBookings()}
          refreshing={loading}
          renderItem={({index, item}) => (
            <BusinessListItem 
              business={item.businessList}
              booking={item}
            />
          )}
        />
      </View>
      :
      <View style={styles.defaultText}>
        <Text style={{fontSize:25, fontWeight:'bold', color:Colors.PRIMARY}}>Sorry,</Text>
        <Text style={{fontSize:15, color:Colors.GRAY}}> No Bookings At the moment.</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Text style={{backgroundColor:Colors.PRIMARY, padding:10, borderRadius:10, color:Colors.WHITE}}>
              Go to business categories
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      }
      </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  defaultText:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    marginTop:100
  }
})