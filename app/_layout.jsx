import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text } from "react-native";
import LoginScreen from '../components/LoginScreen'
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import { useEffect,useState  } from "react";
import AnimatedSplashScreen from "../components/AnimatedSplashScreen";
import AnimatedSplashScreenLottie from "../components/AnimatedSplashScreenLottie";




const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};



export default function RootLayout() {

  // useFonts({
  //   'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
  //   'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  //   'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
  // })
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
  });

  

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          setTimeout(() => {
            setAppIsReady(true);
          }, 8000); // Temps d'affichage du splash screen
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return <AnimatedSplashScreenLottie onFinish={() => setAppIsReady(true)} duration={5000} />;
  }


  // if (!appIsReady) {
  //   return <AnimatedSplashScreenLottie onFinish={() => setAppIsReady(true)} duration={6000} />;
  // }




  return (
    <ClerkProvider 
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    tokenCache={tokenCache}
    >
      <SignedIn>
      <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
      </Stack>
    </SignedIn>
    <SignedOut>
     <LoginScreen></LoginScreen>
    </SignedOut>
    </ClerkProvider>
  );
}




