import { View, Text,FlatList, ScrollView } from 'react-native'
import React,{ useRef, useEffect } from 'react'
import BusinessListCard from './BusinessListCard'


export default function ExploreBusinessList({businessList}) {
  const flatListRef = useRef(null);

  useEffect(() => {
    // Lorsque les données changent, scroller vers le haut
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [businessList]);

  return (
    <View style={{flex:1}}>
   
        
      <FlatList 
        ref={flatListRef} 
      keyExtractor={(item) => item.id} 
      scrollEnabled
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({item,index})=>(
        <BusinessListCard 
        
        business={item} />
    
  )}
      />
      <View style={{
        height:20
      }}>
      
      </View>
    
    </View>
  )
}