import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../utils/Colors'
import Heading from '@/app/Components/Heading';



export default function BookingModal({hideModal}) {

  // useEffect(() => {
  //   getTime()
  // }, [])
  

  // const getTime = () => {
  //     const timeList = [];
  //     for (let i = 8; i <= 12; i++) {
  //       timeList.push({
  //         time:i + ':00AM'
  //       })
        
  //     }
  // }
  return (
    <View>
      <TouchableOpacity onPress={() => hideModal()} style={{marginHorizontal:20, marginTop:20}} >
          <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <View style={{marginHorizontal:20, marginBottom:10}}>
        <Heading text={'Select Date'} />
      </View>
      <View style={styles.calendar}>
          <CalendarPicker onDateChange={this.onDateChange}
              width={350}
              minDate={Date.now()}
              todayBackgroundColor={Colors.WHITE}
              selectedDayColor={Colors.GRAY}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calendar:{
    backgroundColor:Colors.PRIMARY,
    marginHorizontal:20,
    borderRadius:10,
    padding:10
  }
})