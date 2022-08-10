// R components (extensão)
import { Input as NativeBaseInput, IInputProps } from 'native-base';

//{...rest} -> pega todas as propriedades que estão sendo colocadas no component
//e adiciona no campo Input
export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        // placeholderTextColor="gray.300"
        _focus={{
          borderWidth: 1,
          // borderColor: 'green.500',
          // bg :"gray.700"
        }}
        {...rest}
    />
  );
}