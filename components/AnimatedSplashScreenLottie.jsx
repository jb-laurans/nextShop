import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import animationData from '../assets/animation.json'; 

import chouetteData from '../assets/owl.json'; 

export default function AnimatedSplashScreen({ onFinish, duration = 5000 }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/Outfit-Medium.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync().then(() => {
        if (typeof onFinish === 'function') {
          onFinish(); // Assurez-vous que onFinish est appelé comme une fonction
        }
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!fontsLoaded) {
    return null; // Peut-être afficher un chargement des polices ici
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={chouetteData} // Source de votre animation JSON ou URL
        autoPlay
        loop={true}
        onAnimationFinish={onFinish}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Welcome !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    fontFamily: 'Roboto-Bold', // Assurez-vous que la police est chargée correctement
  },
});
