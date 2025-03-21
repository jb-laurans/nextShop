import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function Intro({ business }) {

 
  //console.log(business)
    const router = useRouter()
    // if (!business || !business.imageUrl) {
    //     return <Text>Loading...</Text>;
    //   }

  return (
    <View>
      <View style={{
        position:"absolute",
        zIndex:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        padding:30,

      }}>
        <TouchableOpacity onPress={()=> {
          router.back()

        }}>
        <Ionicons name="arrow-back-circle" size={40} color="white" />


        </TouchableOpacity>
      <Entypo name="heart-outlined" size={40} color="white" />
      
      </View>
      
      <Image source={{uri:business?.imageUrl}}
        style={{
            width:"100%",
            height:340
        }}
      />
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      
      }}>
        <Text style={{
          fontSize:26,
          fontFamily:'outfit-bold'
        }}>{business?.name}</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:18
        }}>{business?.address}</Text>
      </View>
    </View>
  )
}