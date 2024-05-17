import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user, isLoading} = useUser();

  return user && (
    <View >
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <View style={styles.profileSection}>
                    <Image source={{uri:user?.imageUrl}} style={styles.userImage} />
                    <View>
                        <Text style={{color:Colors.WHITE, fontSize:20}}>Welcome</Text>
                        <Text style={{color:Colors.WHITE, fontSize:17, fontWeight:'bold'}}>{user.fullName}</Text>
                    </View>
                </View>
                        <FontAwesome name="bookmark" size={24} color="white" style={{marginRight:20, marginTop:10}}/>
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search' style={styles.textInput}></TextInput>
                <FontAwesome name="search" size={20} color="#999999" style={{backgroundColor:Colors.WHITE, padding:11, borderRadius:5}}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:Colors.PRIMARY,
        margin:10,
        padding:10,
        borderRadius:10,
        height:170,
        justifyContent:'center'
    },
    topSection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',   
    },
    profileSection:{
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:90
    },
    searchContainer:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    textInput:{
        backgroundColor:Colors.WHITE,
        padding:7,
        paddingHorizontal:16,
        borderRadius:5,
        width:'85%',
    }
})