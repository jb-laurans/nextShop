import { FlatList,View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import {db} from './../../configs/FirebaseConfig'
import { doc, getDoc,collection } from 'firebase/firestore'
import { ActivityIndicator } from 'react-native'

import { Colors } from '../../constants/Colors'
import Intro from '../../components/businessDetail/Intro'
import ActionButton from '../../components/businessDetail/ActionButton'
import About from '../../components/businessDetail/About'
import { ScrollView } from 'react-native'
import Reviews from '../../components/businessDetail/Reviews'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function BusinessDetail() {

    const {businessid} = useLocalSearchParams()
    const [business, setBusiness] =useState()
    const  [loading,setLoading]= useState(false)


    useEffect(()=>{
        GetBusinessDetailById()
    },[])

    
    const GetBusinessDetailById = async ()=>{
    setLoading(true)
    const docRef = doc(db,'BusinessList',businessid)
    const docSnap=await getDoc(docRef)
    if(docSnap.exists()){
        
        setBusiness({id:docSnap.id,...docSnap.data() })
        setLoading(false)
    }else{
        
        setLoading(false)
    }



    }
    if (loading && !business) {
      return (
          <ActivityIndicator 
              style={{ marginTop: '70%' }}
              size={'large'}
              color={Colors.PRIMARY}
          />
      );
  }

  if (!business) {
      return (
          <View>
              <Text>No business found</Text>
          </View>
      );
  }

  return (
    
      <FlatList
    //   onRefresh={GetBusinessDetailById}
          data={[business]}
          onRefresh={GetBusinessDetailById} 
         refreshing={loading} // 
          renderItem={({ item }) => (
            <KeyboardAwareScrollView>
              <View>
                  <Intro business={business} />
                  <ActionButton business={business} />
                  <About business={business} />
                  <KeyboardAwareScrollView style={{ flex: 1 }}>
                  <Reviews business={business} />
                  </KeyboardAwareScrollView>
              </View>
              </KeyboardAwareScrollView>
          )}
          keyExtractor={(item) => item.id ? item.id : 'default'}
          

      />
    
  );
}