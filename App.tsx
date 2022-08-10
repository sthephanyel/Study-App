import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontLoadead] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontLoadead ? <Routes/>:<Loading/>}
    </NativeBaseProvider>
  );
}