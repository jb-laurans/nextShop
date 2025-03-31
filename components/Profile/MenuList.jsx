import { View, Text,Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function MenuList() {

    const menuList =[
        {
            id:1,
            name:'Add Business',
            icon:require('./../../assets/images/add.png'),
            path:''
        },
        {
            id:2,
            name:'My Business',
            icon:require('./../../assets/images/business-and-trade.png'),
            path:''
        },
        {
            id:3,
            name:'Share Business',
            icon:require('./../../assets/images/share_1.png'),
            path:''
        },
        {
            id:4,
            name:'Logout',
            icon:require('./../../assets/images/logout.png'),
            path:''
        },

    ]
  return (
    <View>
     <FlatList
     data={menuList}
     numColumns={2}
     renderItem={({item,index})=>(
        
        <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:6,
        flex:1,
        padding:8,
        borderRadius:15,
        borderWidth:1,
        margin:10,
        backgroundColor:'#fff',
        borderColor:Colors.PRIMARY



        }}>
            <Image source={item.icon}
                    style={{
                        width:40,
                        height:40
                    }}
            />
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:18,
                flex:1
            }}>
                {item.name}
            </Text>
        </View>
     )}
     />
    </View>
  )
}