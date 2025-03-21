import { View, Text,Image, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

export default function ActionButton({business}) {

    //console.log(business)
    const actionButtonMenu=[
        {
            id:1,
            name:'Appel',
            icon:require('./../../assets/images/call.png'),
            url:'tel: '+business?.contract
        },
        {
            id:2,
            name:'Location',
            icon:require('./../../assets/images/pin.png'),
            url:'https://www.google.com/maps/search/?api=1&query='+business?.address
        },
        {
            id:3,
            name:'Web',
            icon:require('./../../assets/images/web.png'),
            url:business?.website
        },
        {
            id:4,
            name:'Partager',
            icon:require('./../../assets/images/share.png'),
            url:business?.website
        }
    ]

    const OnPressHandle =(item)=>{
        if(item.name=='Partager'){
            Share.share({
                message:business?.name+"\n Adresse:"+business.address+"\n Trouvez plus de détails sur le magasin"

            })
            return ;
            
        }
        

        
        Linking.openURL(item.url)

    }
  return (

    <View style={{
        backgroundColor:"#fff",
        padding:20
    }}>
      <FlatList 
      data={actionButtonMenu}
      numColumns={4}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item,index})=>(
        <TouchableOpacity key={index}
        onPress={()=>OnPressHandle(item)}
        
        >
            <Image source={item?.icon} 
            style={{
                width:50,
                height:50
            }}
            />
            <Text style={{
                fontFamily:'outfit-medium',
                textAlign:'center',
                marginTop:3,
            }}>{item?.name}
                </Text> 
        </TouchableOpacity>
      )}
      
      />

    </View>


  )
}