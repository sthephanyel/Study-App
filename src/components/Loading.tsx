import {Center, Spinner} from 'native-base';

// cria um efeito de carregamento
export function Loading(){
    return(
        <Center flex={1} bg="#0D1019">
            <Spinner color="white"></Spinner>
        </Center>
    )
}