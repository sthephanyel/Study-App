import {useState, useEffect} from 'react';
import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center, ScrollView, Select, Box } from 'native-base';

import {ChatTeardropText} from 'phosphor-react-native'

import {SignOut} from 'phosphor-react-native'
import { Button } from '../components/Button';

import {useNavigation} from '@react-navigation/native';

import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';
import { Loading } from '../components/Loading';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import DateTimePicker from '@react-native-community/datetimepicker';

export function NewHour() {

    const [isLoading, setIsLoading] = useState(false);

    const [titleNew, setTitleNew] = useState('');
    const [descriptionNew, setDescriptionNew] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [hoursDate, setHoursDate] = useState('Empty');
    const [timeDate, setTimeDate] = useState('Empty');

    const [timeStudy, setTimeStudy] = useState('25');
    const [timeDescanso, setTimeDescanso] = useState('5');
    const [quantVezes, setQuantVezes] = useState('5');

    const navigation = useNavigation();

    const onChange =(event, selectedDate)=>{
      const currentDate = selectedDate || date;
      setShow(Platform.OS ==='ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' +(tempDate.getMonth() + '/' + tempDate.getFullYear());
      let fTime = ''+ tempDate.getHours() + ' : ' + tempDate.getMinutes();
      // setText(fDate + '\n ' + fTime);
      setHoursDate(fTime);
      setTimeDate(fDate);

      console.log(fDate + ' (' + fTime + ')');
      // console.log('TEXT',text)
    }

    const showMode =(currendMode) => {
      setShow(true);
      setMode(currendMode);
    }

    function handleNewHourStudy(){
      if(!titleNew || !descriptionNew) {
        return Alert.alert('Registrar','Preencha todos os campos')
      }
      setIsLoading(true);
      // Cria uma coleção dentro do BD do firebase
      firestore()
      .collection('newTime')
      // Em seguida adiciona dentro dessa coleção as informações descritas
      .add({
        titleNew,
        descriptionNew,
        status: 'open',
        hoursDate,
        timeDate,
        timeStudy,
        timeDescanso,
        quantVezes,
        // recurso proprio do firebase que verifica o horário
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(()=>{
        // Envia uma mensagem de alert informando que deu tudo certo
        //e retorna para tela anterior após esse processo
        Alert.alert('Novo Horário','Novo horário de estudo adicionado a lista')
        setIsLoading(false);
        navigation.navigate("home");
      })
      .catch(err => {
          console.log(err)
          setIsLoading(false);
          return Alert.alert('Solicitação','Não foi possivel registrar o pedido')
        })
    }

    useEffect(()=>{
      onChange();
    },[])
    
    
  return (
    <VStack
      flex={1} 
      pb={3}
      bg="#0D1019"
      pt={3}
    >
        <Header title="Hora de Estudar"/>
        <HStack
            w="full"
            alignItems="center"
            pt={2}
            pb={2}
            px={6}
        >
          <Text color="#ffffff">Adicionar</Text>
        </HStack>

        <VStack
        flex={1} 
        bg="#0D1019"
        margin={3}
      >
        <VStack flex={1} p={5} rounded="md" borderWidth={3}
        borderColor="#ffffff"
        borderRadius={20}>
          <ScrollView h="80" showsVerticalScrollIndicator={false}>
            <VStack flex={0.5}>
              {/* Imput do titulo */}
              <VStack 
                flex={1} 
                p={5}
                mb={5}
              >
                <Text mb={5} color="#ffffff">Titulo</Text>
                <Input 
                  placeholder="Titulo ou tema que será estudado"
                  mb={1}
                  textAlignVertical='top'
                  maxLength={33}
                  onChangeText={setTitleNew}
                />
              </VStack>
              {/* Input da descriçao */}
              <VStack 
                flex={1} 
                p={5} 
                mb={5}
              >
                <Text mb={5} color="#ffffff">Descrição</Text>
                <Input 
                  placeholder="Titulo ou tema que será estudado"
                  mb={1}
                  h={150}
                  multiline
                  textAlignVertical='top'
                  borderWidth={2}
                  maxLength={100}
                  _focus={{
                      borderWidth: 2,
                      borderColor:'#ffffff',
                      bg :"gray.700"
                  }}
                  onChangeText={setDescriptionNew}
                />
              </VStack>
              {/* Input Horario */}
              <VStack flex={1}
                p={5}
                h={250}
                mb={5}
                flexDirection="row"
                justifyContent="space-between"
                >

                  <VStack 
                    flex={1} 
                    alignItems="center"
                    justifyContent="center"
                    borderRightWidth={2}
                    borderColor="#ffffff"
                    >
                    <VStack
                      w="full"
                      // alignItems="center"
                      justifyContent="center"
                    >
                      <Text bold fontSize={18} ml={2} color="#ffffff">Inicio</Text>

                      <Button
                        title={hoursDate}
                        fontTamanho={`${20}`}
                        // w="full"
                        m={3}
                        bg="#ffffff"
                        colorTitle="#000000"
                        
                        onPress={()=>showMode('time')}
                        borderRadius="20"
                        // Cria um loading no botao e não permite clicar de novo
                        isLoading={isLoading}
                      />
                    </VStack>

                    <VStack
                      w="full"
                      // alignItems="center"
                      justifyContent="center"
                    >
                      <Text bold fontSize={18} ml={2} color="#ffffff">Metodologia</Text>

                      <VStack
                        flexDirection="row"
                        justifyContent="space-around"
                        m={2}
                        >
                          <Select borderRadius={15} bg="#ffffff" selectedValue={timeStudy} onValueChange={itemValue => setTimeStudy(itemValue)} minWidth="75" color="#000000" placeholderTextColor="#000000" accessibilityLabel="Choose Service" placeholder={`${timeStudy}`} _selectedItem={{
                          bg: "gray.400",
                          // endIcon: <CheckIcon size="5" />
                        }} mt={1}
                        fontSize={15}
                        >
                            <Select.Item label="25" value="25" />
                            <Select.Item label="20" value="20" />
                            <Select.Item label="15" value="15" />
                            <Select.Item label="10" value="10" />
                          </Select>

                          <Select borderRadius={15} bg="#ffffff" selectedValue={timeDescanso} onValueChange={itemValue => setTimeDescanso(itemValue)} minWidth="75" color="#000000" placeholderTextColor="#000000" accessibilityLabel="Choose Service" placeholder={`${timeDescanso}`} _selectedItem={{
                          bg: "gray.400",
                          // endIcon: <CheckIcon size="5" />
                        }} mt={1}
                          fontSize={15}
                        >
                            <Select.Item label="5" value="5" />
                            <Select.Item label="8" value="8" />
                            <Select.Item label="10" value="10" />
                          </Select>

                      </VStack>

                      <VStack
                        flexDirection="row"
                        justifyContent="space-around"
                        m={2}
                      >
                        <Select borderRadius={15} bg="#ffffff" selectedValue={`${quantVezes+' X'}`} onValueChange={itemValue => setQuantVezes(itemValue)} minWidth="85" color="#000000" placeholderTextColor="#000000" accessibilityLabel="Choose Service" placeholder={`${quantVezes+' X'}`} _selectedItem={{
                          bg: "gray.400",
                          // endIcon: <CheckIcon size="5" />
                        }} mt={1}
                          fontSize={15}
                        >
                            <Select.Item label="2 X" value="5" />
                            <Select.Item label="3 X" value="8" />
                            <Select.Item label="4 X" value="10" />
                            <Select.Item label="5 X" value="10" />
                          </Select>
                      </VStack>
                    </VStack>

                    

                  </VStack>
                  
                  <VStack 
                    flex={0.6} 
                    alignItems="center"
                    justifyContent="center"
                    pt={5}
                    >
                    <Text bold fontSize={18} mb={10} color="#ffffff">Data</Text>
                    <Button
                      title={timeDate}
                      fontTamanho={`${14}`}
                      m={1}
                      bg="#ffffff"
                      colorTitle="#000000"
                      onPress={()=>showMode('date')}
                      borderRadius="20"
                      // Cria um loading no botao e não permite clicar de novo
                      isLoading={isLoading}
                    />
                  </VStack>
                  {show && (
                      <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                      />
                    )}

              </VStack>
              {/* button de salvar */}
              <VStack 
                flex={1} 
                p={5}
                mb={5}
              >
              <Button
                title="Salvar"
                w="full"
                fontTamanho="23"
                bg="#32CD32"
                colorTitle="#ffffff"
                
                onPress={handleNewHourStudy}
                borderRadius="20"
                // Cria um loading no botao e não permite clicar de novo
                isLoading={isLoading}
              />
              </VStack>
              
            </VStack>
          </ScrollView>
        </VStack>
      </VStack>

        
    </VStack>
  );
}