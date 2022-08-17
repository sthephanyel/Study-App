import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps &{
    title: string;
    colorTitle: string;
}
export function Button({title,colorTitle, ...rest}: Props) {
  return (
    <ButtonNativeBase 
      rounded="sm"
      _pressed={{bg:"gray.500"}}
        {...rest}>
        <Heading
            // color="white"
            color={colorTitle}
            fontSize={20}
            
        >
            {title}
        </Heading>
    </ButtonNativeBase>
  );
}