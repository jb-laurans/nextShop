import { View, Text,Image,StyleSheet, Button } from 'react-native'
import React from 'react'
import {Colors} from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

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

    <View>

        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:100
        }}>
      <Image source={require('./../assets/images/login.png')}
     
      style ={{
        width:220,
        height:370,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
      }}/>

    </View>

      <View style={styles.subContainer}>
        <Text style={{fontSize:40, fontFamily:'outfit-bold',textAlign:'center'}}>Accédez à notre  
            <Text style={{
                color:Colors.PRIMARY,
                
            }}> Shop</Text>
        </Text>
        <Text style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:'center',
            marginVertical:15,
            color:Colors.GRAY

        }}>Find your favorite business near at Home</Text>
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
            <Text style={{
                textAlign:'center',
                color:'#fff',
                fontFamily:'outfit'

            }}>Let's get Started</Text>
        </TouchableOpacity>

      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:"#fff",
    padding:20,
    marginTop:-20,


  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20


  }
})
