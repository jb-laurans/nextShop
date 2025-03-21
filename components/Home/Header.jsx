import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "@clerk/clerk-expo";

export default function Header() {

    const {user} =useUser()

    //Fonction de déconnection + Vidage token
    const { isLoaded, signOut } = useAuth();
    const navigation = useNavigation();
    const logout = async () => {
        try {
        if (isLoaded) {
            await signOut();
        }
        // Si vous souhaitez explicitement vider le cache de SecureStore, décommentez la ligne suivante
        await SecureStore.deleteItemAsync('cacheToken'); 
        navigation.navigate('home'); // Redirige vers l'écran de connexion
        } catch (err) {
        console.error('Erreur lors de la déconnexion :', err);
        }
    };
   
  return (

        <View style={{
            padding:20,
            paddingTop:40,
            backgroundColor:Colors.PRIMARY,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20

        }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10
            }}>
                <Image source={{uri:user?.imageUrl}}
                    style={{
                        width:45,
                        height:45,
                        borderRadius:99
                    }}
                />
                <View>
                    <Text style={{
                        color:'#fff'
                    }}>Bienvenu</Text>
                    <Text style={{
                        fontSize:19,
                        color:"#fff",
                        fontFamily:'outfit-medium'
                    }}>{user?.fullName}</Text>
                    {/* <Text style={{
                        
                        color:"#fff",
                        fontFamily:'outfit-medium'
                    }}>{user?.primaryEmailAddress.emailAddress}</Text> */}
                </View>
                <TouchableOpacity style={styles.button} onPress={logout}>
                <Ionicons name="log-out-outline" size={24} color="#000" />
            </TouchableOpacity>
                {/* SearchBar */}
                
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:'#fff',
            padding:10,
            marginVertical:10,
            marginTop:15,
            borderRadius:8


        }}>
            <Ionicons name="search" size={28} color={Colors.PRIMARY} />
            <TextInput placeholder='Recherche...' style={{
            fontFamily:'outfit',
            fontSize:16
            }}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      marginLeft:50,
      padding: 10,
      backgroundColor: '#ddd',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    
    }
  });