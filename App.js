/*import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import AppBar from './screens/AppBar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AuthProvider, { AuthContext } from "./context/AuthContext"; 
import AppDrawer from "./navigation/AppDrawer"; 
import LoginScreen from "./screens/LoginScreen"; 
import { useContext } from "react";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Navigation par pile ---
function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Accueil" component={HomeScreen} options={{
headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' },
}}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Mes Détails Personnalisés' }}/>
    </Stack.Navigator>
  );
}

// --- Navigation par onglets ---
export default function App() {
  return (
    <SafeAreaProvider> 
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <NavigationContainer>
      <AppBar />
      <Tab.Navigator screenOptions={{ 
        headerShown: false, // cacher le header
        tabBarActiveTintColor: 'blue', // couleur de l’onglet actif
        tabBarInactiveTintColor: 'gray', // couleur de l’onglet inactif
        tabBarStyle: { backgroundColor: '#f0f0f0' }, // style de la barre
        tabBarLabelStyle: { fontSize: 14 }, 
      }}>

        <Tab.Screen name="Maison" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => ( <Ionicons name="home" size={size} color={color} /> ), }}/>
        <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({ color, size }) => ( <Ionicons name="settings" size={size} color={color} /> ), }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView> 
    </SafeAreaProvider>

  );
}*/

import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { Provider } from "react-redux"; 
import { store } from "./store/store";

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
    </Provider>
  );
}
