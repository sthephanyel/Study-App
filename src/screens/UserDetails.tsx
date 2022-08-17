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

export function UserDetails() {

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
      bg="#0D1019">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            // bg="gray.600"
            pt={8}
            pb={5}
            px={6}
        >
            <Text color="#ffffff">Hora de Estudar</Text>
            <IconButton
                icon={<SignOut size={26} color="#ffffff"/>}
                onPress={handleLogount}
            />
        </HStack>
        
    </VStack>
  );
}