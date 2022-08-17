import {useState, useEffect} from 'react';
import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center } from 'native-base';

import {ChatTeardropText} from 'phosphor-react-native'

import {SignOut} from 'phosphor-react-native'
import { Button } from '../components/Button';

import {useNavigation} from '@react-navigation/native';

import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';
import { Loading } from '../components/Loading';

export function Stopwatch() {

    function handleLogount(){
        auth()
        .signOut()
        .catch(error =>{
            console.log(error);
            return Alert.alert('Sair','Não foi possivel sair')
        });
    }
    
  return (
    <VStack
      flex={1} 
      justifyContent="center" 
      alignItems="center" 
      pb={6}
      bg="#0D1019"
    >
        <Text color="#ffffff">Stopwatch</Text>
    </VStack>
  );
}