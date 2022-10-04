import {
  Button as ChakraUIButton,
  ButtonProps as ChakraUIButtonProps,
} from '@chakra-ui/react';

type ButtonProps = ChakraUIButtonProps;

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <ChakraUIButton {...rest}>{children}</ChakraUIButton>;
};
