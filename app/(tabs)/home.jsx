import { View, Text, Button,TouchableOpacity, StyleSheet,ScrollView   } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
import Popular from '../../components/Home/PopularBusiness';


export default function home() {


  return (
    <ScrollView>
       {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

       {/* Category */}

       <Category />

       {/* PopularBusiness */}

       <Popular />

       <View style={{
        height:100
       }}></View>


      {/* Footer */}

    </ScrollView>
  )
}

