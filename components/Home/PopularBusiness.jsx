import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import {db} from './../../configs/FirebaseConfig'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import PopularBusinessCard from './PopularBusinessCard'

export default function BusinessList() {
  const [BusinessList, setBusinessList] = useState([])

  useEffect(()=>{
    GetBusinessList()
},[])

  const GetBusinessList =async()=>{
    setBusinessList([])
    const q = query(collection(db,'BusinessList'),limit(10))
    const querySnapshot=await getDocs(q)

    querySnapshot.forEach((doc)=>{
      // console.log(doc.data())
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])

    })

  }
  return (
    <View>
      <View style={{
            paddingLeft:20,
            marginBottom:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:20,
        }}>
        <Text style={{
        paddingLeft:20,
       
        fontSize:20,
        fontFamily:'outfit-bold',
        display:'flex',
    
      }}>Populaires
      </Text>
      <Text style={{
        color:Colors.PRIMARY,
        fontFamily:'outfit-medium'
      }}>Voir Tout</Text>
      </View>
      <FlatList

        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={BusinessList}
        renderItem={({item,index})=>(
          <PopularBusinessCard
          key={index}
          business={item} 
          
          
          />
         
        )}
        
      />
    </View>
  )
}