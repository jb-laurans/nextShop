import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from './../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'


export default function Category({explore=false,onCategorySelect}) {


    const [categoryList, setCategoryList] = useState([])
    //Configurer une autre route vers la liste Par Categories
    const router = useRouter()
    useEffect(()=>{
        GetCategoryList()
    },[])
    const GetCategoryList = async()=>{
        setCategoryList([])
        
        const q = query(collection(db,'Category'))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc)=>{
            // console.log(doc.data())
            setCategoryList(prev=>[...prev,doc.data()])
        })
    }

    const onCategoryPressHandler=(item)=>{
      if(!explore){
        console.log('Home')
        router.push('/businessList/'+item.name)
      }else{

        console.log('Explore')
        onCategorySelect(item.name)
      }
    }
  return (
    <View>
      {!explore &&
        <View style={{
            padding:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10,
        }}>
        <Text style={{
        paddingLeft:20,
       
        fontSize:20,
        fontFamily:'outfit-bold',
        display:'flex',
    
      }}>Categories
      </Text>
      <Text style={{
        color:Colors.PRIMARY,
        fontFamily:'outfit-medium'
      }}>Voir Tout</Text>
      </View>}

      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={categoryList}
      renderItem={({item,index})=>(
        <CategoryItem 
        category={item} 
        key={index}
        onCategoryPress={(category)=>
          onCategoryPressHandler(item)}
        />
      )}
      style={{
        marginLeft:20
      }}
      
      
      />
      
    </View>
  )
}