import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, {useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../utils/Colors'
import BookingModal from './BookingModal'

export default function BusinessDetailScreen() {
    const param = useRoute().params
    const navigation = useNavigation()

    const [business, setBusiness] = useState(param?.business)  
    const [readMore, setReadMore] = useState(false) 
    const [showModal, setShowModal] = useState(false)

    function toggleReadMore() {
      setReadMore(preve => !preve)
    }

   
    
    
  return business&&(
    <View>
      <ScrollView style={{height:'90%'}}>
        <Image source={{uri:business.images[0].url}} style={styles.topImage}/>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{position:'absolute', top:10, left:20}}>
          <FontAwesome5 name="arrow-left" size={28} color="black" />
        </TouchableOpacity>

        <View style={{padding:20, display:'flex', gap:5}}>
            <Text style={{fontWeight:'bold', fontSize:24, marginBottom:6}}>{business.name}</Text>
            <View >
              <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                <Text style={{fontSize:18, color:Colors.PRIMARY}}>{business.contactPerson}</Text>
                {/* <Text style={{fontSize:14, backgroundColor:Colors.PRIMARYFADED, color:Colors.PRIMARY, padding:5, borderRadius:5}}>{business.category.name}</Text> */}
              </View>
              <View style={styles.location}>
                  <Ionicons name="location-outline" size={18} color={Colors.PRIMARY} />
                  <Text style={{fontSize:14, color:Colors.GRAY}}>{business.address}</Text>
              </View>
              <View style={{borderWidth:0.4, marginVertical:10, borderColor:Colors.GRAY}}></View>
                  <Text style={{fontSize:20, fontWeight:'bold', marginVertical:15}}>About Me</Text>
                  <Text numberOfLines={readMore ? null : 5} style={{lineHeight:28, fontSize:16}}>{business.about}</Text>
                  <TouchableOpacity onPress={toggleReadMore}>
                    <Text style={{color:Colors.PRIMARY, fontSize:15}}>
                      {readMore ? 'Less..' : 'Read More'}
                    </Text>
                  </TouchableOpacity>
            </View>

            <View style={{borderWidth:0.4, marginVertical:12, borderColor:Colors.GRAY}}></View>
            <View>
                <Text style={{fontWeight:'bold', fontSize:20}}>Photos</Text>
                <Image source={{uri:business.images[0].url}} style={{width:250, height:150}}/>
            </View>
        </View>
      </ScrollView>

            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.messageBtn}>
                <Text style={{textAlign:'center', fontSize:20, color:Colors.WHITE}}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookingBtn} onPress={() => setShowModal(true)}>
                <Text style={{textAlign:'center', fontSize:20, color:Colors.PRIMARY}}>Book Now</Text>
              </TouchableOpacity>
            </View>

            <Modal 
              animationType='slide'
              visible={showModal}
            >
              <BookingModal 
                businessId={business.id}
                hideModal={() => setShowModal(false)}
              />
            </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  topImage:{
    width:'100%', 
    height:240, 
    position:'relative'
  },
  location:{
    display:'flex',
    flexDirection:'row',
    gap:6,
    borderColor:Colors.PRIMARY,
    borderBottom: 20,
    marginVertical:10
  },
  btnContainer:{
    display:'flex',
    flexDirection:'row',
    margin:10,
    gap:10
  },
  messageBtn:{
    fontSize:16,
    backgroundColor:Colors.PRIMARY,
    borderRadius:30,
    color:Colors.WHITE,
    padding:10,
    flex:1
  },
  bookingBtn:{
    fontSize:16,
    backgroundColor:Colors.WHITE,
    borderRadius:30,
    borderWidth:2,
    borderColor:Colors.PRIMARY,
    padding:10,
    flex:1
  }
})