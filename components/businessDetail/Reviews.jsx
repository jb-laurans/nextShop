import { View, Text, TextInput,ScrollView, TouchableOpacity, ToastAndroid,Image  } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors';
import { arrayUnion, updateDoc } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-expo';
import {doc}  from 'firebase/firestore';
import {db} from '../../configs/FirebaseConfig';



export default function Reviews({business}) {
    const[rating,setRating ] =useState(4)
    const [userInput,setUserInput] = useState()
    const {user} =useUser()

    const onSubmit =async ()=> {
      
      // console.log(business)
      console.log(rating)
      const docRef = doc(db,'BusinessList', business?.id)
      await updateDoc(docRef,{
        reviews:arrayUnion({
          rating:rating,
          comment:userInput,
          userName:user?.fullName,
          userImage:user?.imageUrl,
          userEmail:user?.primaryEmailAddress?.emailAddress,


        })

      })

      ToastAndroid.show('Commentaire envoyée', ToastAndroid.BOTTOM)
    }
    
    
  return (
    
   
      
    <View style={{
        padding:20,
        backgroundColor:'#fff'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20

      }}>Avis</Text>
      <View>
        <Rating
        showRating={false}
        imageSize={25}
        onFinishRating={(rating)=>setRating(rating)}
        style={{paddingVertical:10}}
        />
        <TextInput
        placeholder='Commentaire'
        numberOfLines={4}
        onChangeText={(value)=>setUserInput(value)}
        style={{
            borderWidth:1,
            padding:10,
            borderRadius:10,
            borderColor: Colors.GRAY,
            textAlignVertical: 'top',
            zIndex: 1

        }}
        />

        <TouchableOpacity
        disabled={!userInput}
        onPress={()=>onSubmit()}
        style={{
          
          padding:10,
          backgroundColor:Colors.PRIMARY,
          borderRadius:6,
          marginTop:10


        }}
        ><Text
        style={{
        fontFamily:'outfit',
        color:'#fff',
        textAlign:'center'
        }}
        >
          Envoyez votre avis
        </Text>


        </TouchableOpacity>
      </View>

      <View>
        {business?.reviews?.map((item,index)=>(

          <View 
          key={index}
          
          style={{
            
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            padding:10,
            borderWidth:1,
            borderColor:Colors.GRAY,
              borderRadius:15,
              marginTop:10
          }}>
            <Image source={{uri:item.userImage}}
            style={{
              width:50,
              height:50,
              borderRadius:99,
              
            }}
            
            />
            <View style={{
              display:'flex',
              gap:5
            }}>
              <Text style={{
                fontFamily:'outfit-medium',
              }}>{item.userName}</Text>
            <Text>{item.comment}</Text>
            <Rating
            readonly
            imageSize={20}
            startingValue={Math.round(item.rating || 0)}
            // ratingCount={item.rating}
            style={{alignItems:'flex-start'}}
            />

        
            </View>
           
          </View>
        ))}

        </View> 
      
   
    </View>
  
   
  )
}