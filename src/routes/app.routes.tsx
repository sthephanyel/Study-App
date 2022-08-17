//Disponiveis se o usuario logado
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustonTabBar from '../components/CustonTabBar';


import {Home} from '../screens/Home';
import { ListHour } from '../screens/ListHour';
import { NewHour } from '../screens/NewHour';
import { Stopwatch } from '../screens/Stopwatch';
import { UserDetails } from '../screens/UserDetails';


const Tab = createBottomTabNavigator();


export function AppRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props=><CustonTabBar {...props}/>}>
            <Tab.Screen name="home" component={Home}/>
            <Tab.Screen name="stopwatch" component={Stopwatch}/>
            <Tab.Screen name="newhour" component={NewHour}/>
            <Tab.Screen name="listhour" component={ListHour}/>
            <Tab.Screen name="userdetails" component={UserDetails}/>
        </Tab.Navigator>
    );
}