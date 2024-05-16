import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";


WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <ImageBackground source={require('../../../assets/images/living-room.jpg')} style={styles.backgroundImage}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={styles.subContainer}>
            <Text style={{color:Colors.WHITE, fontSize:18,  textAlign:'center'}}>
                In need of a  
                <Text style={{fontWeight:'bold'}}> home professional service worker?</Text> 
                Look no further!
            </Text>

            <TouchableOpacity onPress={onPress}>
              <Text style={styles.button}>
                Get Started
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  loginImage:{
    width:230,
    height:330,
    marginTop:70,
    borderRadius:4
  },

  subContainer:{
    margin:20,
    marginTop:10,
    padding:30
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    color:Colors.WHITE,
    padding:15,
    borderRadius:50,
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginTop:30,
  }
})