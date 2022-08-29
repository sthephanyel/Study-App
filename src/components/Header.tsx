import { Heading, HStack, IconButton, StyledProps, Text, useTheme } from 'native-base';
import {CaretLeft} from 'phosphor-react-native';

import {useNavigation} from '@react-navigation/native';

type Props = StyledProps &{
    title: string;
}

export function Header({title, ...rest}:Props) {
    const {colors} = useTheme();
    const navigation = useNavigation();

  return (
    <HStack
        w="full"
        justifyContent="space-between"
        {...rest}
    >
        <HStack
            w="full"
            alignItems="center"
            pt={10}
            pb={1}
            px={3}
        >
            <Text color="#ffffff">{title}</Text>
        </HStack>
        <HStack
            w="full"
            alignItems="center"
            pt={2}
            pb={2}
            px={6}
        >
        </HStack>
    </HStack>
  );
}