import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Colors from '@/app/utils/Colors'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

export default function ContactUsScreen() {

    const navigation = useNavigation()

    const callBtn = () => {
        Linking.openURL('sms:+254712445492')
    }

    const messageBtn = () => {
        Linking.openURL('mailto:vinwahome@gmail.com?')
    }

  return (
    <View style={{padding:20}}>
      <View >
        <Text style={styles.header}>
            H 
            <Text style={{color:Colors.PRIMARYFADED,}}>|</Text>
            S
        </Text>
      </View>

        <Text style={styles.about}>
            Welcome to Home Services App, your trusted companion for all home service needs. Whether it's house cleaning, plumbing, electrical work, or more, we connect you with skilled professionals at the tap of a button. Simplify your life with our easy-to-use platform, where reliability meets convenience. Join thousands of satisfied users who rely on us for hassle-free home maintenance solutions.
        </Text>

        <Text>
            ***
            <Text style={styles.listing}>
               To list your business on [Your App Name] and connect with customers seeking your services, Call / Text the number below or send us an email.
            </Text> 
        </Text>
        
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.callBtn} onPress={() => callBtn()}>
                <Text  style={{textAlign:'center', fontSize:25, color:Colors.WHITE}}>
                    Call / Message
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.emailBtn} onPress={() => messageBtn()}>
                <Text  style={{textAlign:'center', fontSize:25, color:Colors.PRIMARY}}>
                    Email Us
                </Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                <Text  style={{textAlign:'center', fontSize:15, color:Colors.PRIMARY, borderBottomWidth:2, borderColor:Colors.GRAY, marginVertical:10, paddingVertical:10}}>
                   Go Back Home
                </Text>
            </TouchableOpacity>

            <View style={{textAlign:'center', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <MaterialIcons name="copyright" size={20} color="black" />
                <Text>
                    All Rights reserved.Wahome Vincent Mwangi.
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:'row',
        gap:50,
        textAlign:'center',
        fontSize:60,
        fontWeight:'bold',
        marginVertical:20,
        color:Colors.PRIMARY,
        borderBottomWidth:4,
        borderColor:Colors.GRAY
    },
    about:{
        fontSize:16,
        textAlign:'center',
        marginVertical:10,
        color:Colors.GRAY
    },
    listing:{
        marginVertical:20,
        fontSize:16,
        color:Colors.GRAY,
        textAlign:'center'
        
    },
    btnContainer:{
        display:"flex",
        flexDirection:'column',
        gap:20,
        marginVertical:40
    },
    callBtn:{
        backgroundColor:Colors.PRIMARY,
        borderRadius:30,
        color:Colors.WHITE,
        padding:15,
    },
    emailBtn:{
        backgroundColor:Colors.WHITE,
        borderRadius:30,
        borderWidth:2,
        borderColor:Colors.PRIMARY,
        padding:15,
    }
})