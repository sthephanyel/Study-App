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
import { Header } from '../components/Header';

export function NewHour() {

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
      pb={6}
      bg="#0D1019"
    >
        <HStack
            w="full"
            alignItems="center"
            // bg="gray.600"
            pt={10}
            pb={1}
            px={3}
        >
            <Text color="#ffffff">Hora de Estudar</Text>
        </HStack>
        <HStack
            w="full"
            alignItems="center"
            // bg="gray.600"
            pt={2}
            pb={2}
            px={6}
        >
            <Text color="#ffffff" fontSize="md" fontWeight={'bold'}>Adicionar</Text>
        </HStack>
        <VStack flex={0.5} p={5} bg="gray.600">
          <VStack 
            flex={1} 
            p={5} 
            bg="gray.500"
          >
            <Text color="#ffffff">Titulo</Text>
          </VStack>
        </VStack>
    </VStack>
  );
}