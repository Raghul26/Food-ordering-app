import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from "./screens/OnboardingScreen";
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';
import CustomerCart from './Customercart'
import OfferScreen from './screens/OfferScreen';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Provider store={store}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Cart' component={CustomerCart} />
          <Stack.Screen name='Offer' component={OfferScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// '#ee5155'
// '#cb202d'
