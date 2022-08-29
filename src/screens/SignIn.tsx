import {useState} from 'react';
import {VStack, Heading, Icon, useTheme} from 'native-base';
import { Input } from '../components/Input';

import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const {colors} = useTheme();

    function handleSignIn(){
        if(!email || !password){
            // com o return, o if encerra nesse campo
           return Alert.alert('Entrar','Informe E-mail e Senha');
        }
        setIsLoading(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        // Esse .then retorna algumas informações do usuário
        .then(response =>{
            console.log('VALORES RETORNADOS DO FIREBASE',response)
        })
        .catch((error)=>{
            console.log(error);
            console.log(error.code);
            setIsLoading(false);

            //validação para caso algum erro de sintaxe das credenciais seja verificado
            if(error.code === 'auth/invalid-email'){
                return Alert.alert('Entrar','E-mail inválido');
            }
            if(error.code === 'auth/wrong-password'){
                return Alert.alert('Entrar','E-mail ou Senha inválido');
            }
            if(error.code === 'auth/user-not-found'){
                return Alert.alert('Entrar','E-mail ou Senha inválido');
            }

            return Alert.alert('Entrar','Não foi possivel acessar');
        })
    }


    function handleSignUp(){
        navigation.navigate('signup');
    }

    return(
        <VStack flex={1} alignItems='center' px={8} pt={24} bg="#0D1019">
            <Heading fontSize="xl" mt={20} mb={6} color="#ffffff">
                Hora de Estudar
            </Heading>
            <Heading fontSize="xl" mb={6} color="#ffffff">
                Login
            </Heading>

            <Input 
                placeholder="E-mail"
                mb={4}
                onChangeText={setEmail}
            />
            <Input 
            placeholder="Senha"
            mb={8}
            secureTextEntry
            onChangeText={setPassword}
            />

            <Button
                title="Entrar"
                fontTamanho={`${20}`}
                w="full"
                bg="#ffffff"
                colorTitle="#000000"
                
                onPress={handleSignIn}
                borderRadius="20"
                // Cria um loading no botao e não permite clicar de novo
                isLoading={isLoading}
            />
            <Button
                mt={5}
                fontTamanho={`${20}`}
                title="Cadastrar"
                w="full"
                bg="transparent"
                colorTitle="#ffffff"
                onPress={handleSignUp}
                // Cria um loading no botao e não permite clicar de novo
                isLoading={isLoading}
            />
        </VStack>
    );
}