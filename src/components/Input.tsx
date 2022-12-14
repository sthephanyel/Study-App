// R components (extensão)
import { Input as NativeBaseInput, IInputProps } from 'native-base';

//{...rest} -> pega todas as propriedades que estão sendo colocadas no component
//e adiciona no campo Input
export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput
        size="md"
        borderWidth={0}
        borderBottomWidth={2}
        borderBottomColor="#ffffff"
        borderColor="#ffffff"
        fontSize="md"
        fontFamily="body"
        color="#ffffff"
        // placeholderTextColor="gray.300"
        _focus={{
          // borderColor: 'green.500',
          bg :"gray.700"
        }}
        {...rest}
    />
  );
}