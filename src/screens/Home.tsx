import {useState, useEffect} from 'react';
import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center, IPressableProps } from 'native-base';

import {ChatTeardropText} from 'phosphor-react-native'

import {SignOut} from 'phosphor-react-native'
import { Button } from '../components/Button';

import {useNavigation} from '@react-navigation/native';

import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';
import { Loading } from '../components/Loading';

import {dateFormat} from '../utils/firestoreDateFormat'
import { Header } from '../components/Header';
import {SchedulesOrder} from '../components/SchedulesOrder'

export type SchedulesProps = {
  id: string;
  descriptionNew: string;
  titleNew: string;
  status: 'open' | 'closed';
  hoursDate: string;
  timeDate: string;

  timeDescanso: string;
  timeStudy: string;
  quantVezes: string;

  when: string;
}

type Props = IPressableProps & {
  data: SchedulesProps;
}

export function Home({}:Props) {

  const [isLoading, setIsLoading] = useState(true);
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [schedules, setSchedules] = useState<SchedulesProps[]>([]);
  const navigation = useNavigation();

    function handleLogount(){
        auth()
        .signOut()
        .catch(error =>{
            console.log(error);
            return Alert.alert('Sair','Não foi possivel sair')
        });
    }
    useEffect(()=>{
      setIsLoading(true);
      const subscriber = firestore()
      .collection('newTime')
      // faz uma filtragem de acordo com os parametros mencionados
      // .where('status', '==',statusSelected)
      // atualiza em tempo real caso tenha alguma alteração
      .onSnapshot(snapshot => {
          const data = snapshot.docs.map(doc =>{
              const {quantVezes,timeDescanso, timeStudy, hoursDate, timeDate,titleNew, descriptionNew, status, created_at} = doc.data();

              return {
                  id: doc.id,
                  titleNew,
                  descriptionNew,
                  timeDate,
                  hoursDate,
                  timeStudy,
                  timeDescanso,
                  status,
                  quantVezes,
                  when: dateFormat(created_at)
              }
          });
          setSchedules(data);
          console.log(data);
          setIsLoading(false);
      });
      return subscriber;
  },[statusSelected])
    
  return (
    <VStack 
      flex={1}
      alignItems="center"
      pt={3}
      bg="#0D1019">
        <Header title="Hora de Estudar"/>
        <HStack
            w="full"
            alignItems="center"
            pt={2}
            pb={2}
            px={6}
        >
          <Text color="#ffffff">Bem Vindo, Nome usuario</Text>
        </HStack>
        {/* <Text color="#ffffff">Hello Home</Text> */}
        { isLoading ? <Loading/> :
            <FlatList
                data={schedules}
                keyExtractor={item => item.id}
                renderItem={({item})=><SchedulesOrder data={item}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
                ListEmptyComponent={()=>(
                    <Center>
                        <Text color="gray.300" fontSize="xl" mt={6} alignItems="center">
                            Você ainda não possui Horários {'\n'}
                            de estudo marcados 
                        </Text>
                    </Center>
                )}
            />}
    </VStack>
  );
}