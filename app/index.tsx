import 'react-native-gesture-handler';
import { Text, View } from "react-native";
import Login from './Screens/LoginScreen/Login'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from '../app/Navigations/TabNavigation'


export default function Index() {

  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider 
      tokenCache={tokenCache}
      publishableKey='pk_test_cHJlbWl1bS12aXBlci05MS5jbGVyay5hY2NvdW50cy5kZXYk'
    >
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Sign in Component */}
        <SignedIn>
          <TabNavigation />
        </SignedIn>

        {/* Sign Out Component */}
        <SignedOut>
          <Login />
        </SignedOut>

      </View>
    </ClerkProvider>
  );
}
