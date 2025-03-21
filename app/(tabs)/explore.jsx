import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import Category from '../../components/Home/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

export default function explore() {

  const [businessList,setBusinessList] =useState([]);

  const GetBusinessByCategory = async (category) => {
  // Réinitialiser la liste avant de charger les nouveaux shops
  setBusinessList([]);

  const q = query(collection(db, 'BusinessList'), where('category', '==', category));
  const querySnapshot = await getDocs(q);

  const newBusinessList = [];
  querySnapshot.forEach((doc) => {
    newBusinessList.push({ id: doc.id, ...doc.data() });
  });

  // Mettre à jour la liste avec les nouveaux shops
  setBusinessList(newBusinessList);
};
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Recherchez</Text>
      {/* //Searchbar */}
      <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:'#fff',
            padding:10,
            marginVertical:10,
            marginTop:15,
            borderRadius:8,
            borderWidth:1,
            borderColor:Colors.PRIMARY


        }}>
            <Ionicons name="search" size={28} color={Colors.PRIMARY} />
            <TextInput placeholder='Recherche...' style={{
            fontFamily:'outfit',
            fontSize:16
            }}/>
        </View>

        {/* Category */}
        <Category 
        explore={true}
            onCategorySelect={(category)=> GetBusinessByCategory(category)}
        
        />

        {/* BusinessList */}
        <ExploreBusinessList businessList={businessList} />


      
    </View>
  )
}