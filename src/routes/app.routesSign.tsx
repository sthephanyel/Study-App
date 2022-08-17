//Disponiveis se o usuario logado
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {SignUp} from '../screens/SignUp';
import {SignIn} from '../screens/SignIn';


const {Navigator, Screen} = createNativeStackNavigator();


export function AppRoutesSign(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="signin" component={SignIn}/>
            <Screen name="signup" component={SignUp}/>
        </Navigator>
    );
}