import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps &{
    title: string;
    colorTitle: string;
    fontTamanho: string;
}
export function Button({title,colorTitle,fontTamanho, ...rest}: Props) {
  return (
    <ButtonNativeBase 
      rounded="sm"
      fontSize={20}
      _pressed={{bg:"gray.500"}}
        {...rest}>
        <Heading
            // color="white"
            color={colorTitle}
            fontSize={fontTamanho}
            
        >
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}