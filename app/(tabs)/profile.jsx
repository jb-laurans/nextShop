import { View, Text, ActivityIndicator, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserIntro from '../../components/Profile/UserIntro.jsx';
import MenuList from '../../components/Profile/MenuList.jsx';

export default function Profile() {

  return(
    <View style={{padding:20}} >
    <Text style={{
      fontFamily:'outfit-bold',
      fontSize:35
    }}>Profile</Text>


  <UserIntro/>

  <MenuList/>



  </View>

  )
}

