import styled from 'styled-components/native';
import { House, Timer, FilePlus, Rows, User } from 'phosphor-react-native';


const TabArea = styled.View`
    height: 60px;
    background-color: #0D1019;
    flex-direction: row;
    border-top-width: 2px;
    border-style: solid;
    border-color: gray;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid #4FADBE;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius:12px;
`;


export default ({state, navigation})=>{


    const goTo =(screenName)=>{
        navigation.navigate(screenName);
    }

    return(
        <TabArea backBehavior="history">
            <TabItem onPress={()=>goTo('home')}>
                <House size={state.index===0? 50 : 36} color="#ffffff" style={{opacity: state.index===0? 1 : 0.5}} />
            </TabItem>
            <TabItem onPress={()=>goTo('stopwatch')}>
                <Timer size={state.index===1? 50 : 36} color="#ffffff" style={{opacity: state.index===1? 1 : 0.5}}/>
            </TabItem>
            <TabItem onPress={()=>goTo('newhour')}> 
                <FilePlus size={state.index===2? 50 : 36} color="#ffffff" style={{opacity: state.index===2? 1 : 0.5}} />
    
            </TabItem>
            <TabItem onPress={()=>goTo('listhour')}> 
                <Rows size={state.index===3? 50 : 36} color="#ffffff" style={{opacity: state.index===3? 1 : 0.5}} />
            </TabItem>
            <TabItem onPress={()=>goTo('userdetails')}> 
                <User size={state.index===4? 50 : 36} color="#ffffff" style={{opacity: state.index===4? 1 : 0.5}} />
            </TabItem>
        </TabArea>
    );
}