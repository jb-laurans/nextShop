import React from 'react'
import { View,Text } from 'react-native'

export default function About({business}) {
  return (
   <View style={{
    padding:20,
    backgroundColor:'#fff',


   }}>
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
    }}>
A propos
    </Text>
    <Text
    style={{
        fontFamily:'outfit',
        lineHeight:25
    }}>
        {business?.about}</Text>
   </View>
  )
}
