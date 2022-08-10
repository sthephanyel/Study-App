import { useState, useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native";
// NavigationContainer -->  vai servir para definir quais rotas serão mostradas para o usuário
//se estiver logado ou não

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import { Loading } from "../components/Loading";
import {SignIn} from '../screens/SignIn';
import {AppRoutes} from './app.routes';



export function Routes(){
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    useEffect(()=>{
        const subscriber = auth()
        // verifica se o usuário esta logado
        .onAuthStateChanged(response =>{
            // salva dentro do usuário
            setUser(response);
            setIsLoading(false); 
        })

        return subscriber;
    },[]);
    // verifica se o usuário esta logado ou não, caso esteja ainda carregando, mantem no Loading
    if(loading){
        return <Loading/>
    }

    return(
        <NavigationContainer>
            {/* If ternario */}
            {user ?<AppRoutes/>:<SignIn/>}
        </NavigationContainer>
    );
}