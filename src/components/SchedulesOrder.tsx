import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps } from 'native-base';
import {ClockAfternoon, Hourglass, CircleWavyCheck} from 'phosphor-react-native'

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

export function SchedulesOrder({data, ...rest}:Props) {
    
    const {colors} = useTheme();
    const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
        <HStack
            bg="#fff"
            mb={4}
            alignItems="center"
            rounded="sm"
        >
            <VStack bg="#dee" p={5} pt={2}>
                <Text>{data.titleNew}</Text>
            </VStack>

            <VStack bg="#fff" p={5} pt={2}>
                <Text>{data.descriptionNew}</Text>
                <Text>{data.hoursDate}</Text>
                <Text>{data.timeDate}</Text>
            </VStack>
            
        </HStack>
    </Pressable>
  );
}