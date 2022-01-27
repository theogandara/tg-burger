import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,Box
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type InputVariationOptions = {
  [key: string]: string;
};

const inputVariation: InputVariationOptions = {
  error: "red.800",
  default: "grey.300",
  filled: "green.600",
  focus: "grey.900",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, name, ...rest }: InputProps,
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <>
      <FormControl isInvalid={!!error}>
        {!!label && (
          <FormLabel color={inputVariation[variation]} mb="0px" fontSize="xs">
            {label}
          </FormLabel>
        )}

        <InputGroup flexDirection="column">
          <ChakraInput
            ref={ref}
            focusBorderColor="grey.300"
            color={inputVariation[variation]}
            borderColor={inputVariation[variation]}
            onFocus={handleInputFocus}
            onBlurCapture={handleInputBlur}
            onChangeCapture={(e) => setValue(e.currentTarget.value)}
            size="md"
            fontSize="sm"
            {...rest}
            name={name}
            _hover={{ bgColor: "grey.0", borderColor: "grey.600" }}
            _placeholder={{ color: "grey.300", size: "20px" }}
          />

          <Box w="100%" h="8px">{!!error &&  <FormErrorMessage fontSize="xs">{error.message}</FormErrorMessage>}</Box>
        </InputGroup>
      </FormControl>
    </>
  );
};

export const Input = forwardRef(InputBase);
