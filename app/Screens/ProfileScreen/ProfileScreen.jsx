import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '@/app/utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation()
  const {user} = useUser()

  // useEffect(() => {
  //   console.log(user);
  // },[])

  return (
    <View>
      <View style={styles.userContainer}>
        <Image source={{uri:user.imageUrl}} style={{width:90, height:90, borderRadius:99}}/>
        <Text style={{fontSize:24, color:Colors.WHITE}}>{user.firstName}</Text>
        <Text style={{fontSize:20, color:Colors.WHITE}}>{user.primaryEmailAddress.emailAddress}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.navigationsContent} onPress={() => navigation.goBack()}>
          <Ionicons name="home" size={34} color={Colors.PRIMARY} />
          <Text style={{fontSize:26, color:Colors.PRIMARY}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationsContent} onPress={() => navigation.navigate('Bookings')} >
          <FontAwesome5 name="bookmark" size={30} color={Colors.PRIMARY} /> 
          <Text style={{fontSize:26, color:Colors.PRIMARY}}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationsContent}>
          <Ionicons name="mail" size={30} color={Colors.PRIMARY} />
          <Text style={{fontSize:26, color:Colors.PRIMARY}}>/</Text>
          <FontAwesome name="phone" size={30} color={Colors.PRIMARY} />
          <Text style={{fontSize:26, color:Colors.PRIMARY}}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationsContent}>
          <MaterialCommunityIcons name="logout" size={30} color={Colors.PRIMARY} />
          <Text style={{fontSize:26, color:Colors.PRIMARY}}>Logout</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userContainer:{
    backgroundColor:Colors.PRIMARY,
    borderRadius:10,
    margin:10,
    padding:20,
    display:"flex",
    flexDirection:'column',
    gap:10,
    alignItems:'center'
  },
  navigationsContent:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:18,
    borderWidth:2,
    borderColor:Colors.PRIMARYFADED,
        margin:10,
    borderRadius:20,
    padding:10,
    paddingVertical:20
  }
})