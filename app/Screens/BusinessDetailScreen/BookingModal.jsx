import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../utils/Colors'
import Heading from '@/app/Components/Heading';
import { Collapsible } from '@/components/Collapsible';
import GlobalApi from '../../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo';
import dateFormat from "dateformat";


export default function BookingModal({businessId, hideModal}) {

  const [timeList , setTimeList] = useState()
  const [selectedTime, setSelectedTime] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [noteText, setNoteText] = useState()
  const {user} = useUser()

  const now = dateFormat(selectedDate, "dddd, dS- mmmm");

  useEffect(() => {
    getTime()
    }, []) 
  
  const getTime = () => {
      const timeList = [];
      for (let i = 8; i < 12; i++) {
        timeList.push({
          time:i + ':00 AM'
        })
        timeList.push({
          time:i + ':30 AM'
        })
      }

      for (let i = 1; i < 7; i++) {
        timeList.push({
          time:i + ':00 PM'
        })
        timeList.push({
          time:i + ':30 PM'
        })
      }

      setTimeList(timeList)
  }

  const createNewBooking = () => {
    if(!selectedTime || !selectedDate){
      ToastAndroid.show('Please Enter the date and time!', ToastAndroid.LONG)
      return ;
    }

    const data = {
      userName: user.fullName,
      userEmail: user.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: now,
      businessId: businessId
    }

    GlobalApi.createBooking(data).then(res => {
      ToastAndroid.show('Booking created Successfully!', ToastAndroid.LONG)
      hideModal()
    })
  }
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => hideModal()} style={{marginHorizontal:20, marginTop:20}} >
          <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <View style={{marginHorizontal:20, marginBottom:10}}>
        <Heading text={'Select Date'} />
      </View>
      <View style={styles.calendar}>
          <CalendarPicker 
              onDateChange={setSelectedDate}
              width={350}
              height={320}
              minDate={Date.now()}
              todayBackgroundColor={Colors.WHITE}
              selectedDayColor={Colors.GRAY}
          />
      </View>

      <View>
        <View style={{marginHorizontal:20, marginBottom:5}}>
          <Heading text={'Select Time Slot'} />
        </View>
        <FlatList 
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({index, item}) => (
            <TouchableOpacity onPress={() => {
              setSelectedTime(item.time)
              }
            }
            >
              <Text style={selectedTime === item.time ? styles.selectedTime : styles.unselectedTime}>
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <KeyboardAvoidingView>
          <View style={{marginHorizontal:20, marginBottom:5}}>
              <Heading text={'Any Suggestions / Comments'} />
          </View>
          <View style={{marginHorizontal:8}}>
            <TextInput 
              placeholder='Note..'
              style={styles.noteTextArea}
              multiline={true}
              numberOfLines={5}
              onChange={(text) => setNoteText(text)}
            />
          </View>

          <View >
            <TouchableOpacity onPress={() => createNewBooking()} >
              <Text style={styles.confirmBtn}>Confirm & Book Now</Text>
            </TouchableOpacity>
          </View>

      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  calendar:{
    backgroundColor:Colors.PRIMARY,
    marginHorizontal:20,
    borderRadius:10,
    padding:10
  },
  selectedTime:{
    borderWidth:2,
    borderRadius:25,
    padding:10,
    margin:10,
    marginRight:5,
    borderColor:Colors.PRIMARY,
    textAlign:'center',
    backgroundColor:Colors.PRIMARY,
    color:Colors.WHITE
  },
  unselectedTime:{
    borderWidth:2,
    borderRadius:25,
    padding:10,
    margin:10,
    marginRight:5,
    borderColor:Colors.PRIMARY,
    textAlign:'center',
  },
  noteTextArea:{
    borderWidth:2,
    borderRadius:4,
    borderColor:Colors.PRIMARY,
    margin:10,
    textAlignVertical:'top',
    padding:10
  },
  confirmBtn:{
    backgroundColor:Colors.PRIMARY,
    marginVertical:10,
    color:Colors.WHITE,
    padding:15,
    textAlign:'center',
    borderRadius:30,
    marginHorizontal:20,
    fontSize:18,
    elevation:2
  }
})