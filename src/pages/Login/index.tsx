import { Flex, Text, Heading, VStack, Center } from "@chakra-ui/layout";
import { Button, Grid } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignInSchema = yup.object().shape({
  email: yup.string().required("*Email obrigatório").email("*Email inválido"),
  password: yup.string().required("*Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      height="100vh"
      background="white.0"
      padding="10px 15px"
      alignItems="center"
      justifyContent="space-evenly"
      w="100vw"
    >
      <Grid
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        ml="2"
        alignItems="center"
        justifyContent="center"
        width="90vw"
        maxWidth="420px"
        mt="6"
        border="1px"
        borderRadius="8px"
        borderColor="grey.100"
        padding="10px 15px"
        boxShadow="base"
      >
        <Heading mt="5px" fontSize="md">
          Login
        </Heading>
        <VStack mt="6" spacing="4">
          <Input
            placeholder="Insira seu email"
            label="Email"
            error={errors.email}
            {...register("email")}
            />
          <Input
            type="password"
            placeholder="Insira sua senha"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </VStack>
        <Button
          color="white.0"
          fontSize="sm"
          background="green.500"
          mt="20px"
          type="submit"
          
        >
          Logar
        </Button>

        <Center mt="3" w="340px" color="grey.300" textAlign="center" fontSize="xs">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Center>

        <Button _hover={{backgroundColor: "grey.0"}} color="grey.300" fontSize="sm" background="grey.100" mt="10px">
          Cadastrar
        </Button>
      </Grid>

      <Flex
        height="200px"
        mb="20px"
        flexDirection="column"
        width="90vw"
        maxWidth="350px"
      >
        <Heading
          fontSize="2xl"
          fontFamily="body"
          display="flex"
          alignItems="baseline"
          m="5"
        >
          Burguer
          <Text
            display="flex"
            marginLeft="5px"
            fontSize="md"
            alignItems="baseline"
            color="red.200"
          >
            Kenzie
          </Text>
        </Heading>
        <Flex
          mt="10px"
          height="90px"
          width="310px"
          maxWidth="350px"
          alignItems="center"
          justifyContent="center"
          border="1px"
          borderRadius="8px"
          borderColor="grey.100"
          boxShadow="lg"
        >
          <Flex
            w="60px"
            m="10px"
            background="#E9F7EF"
            h="60px"
            alignItems="center"
            justifyContent="center"
            marginRight="5px"
            borderRadius="10px"
          >
            <FiShoppingBag color="#27AE60" fontSize="20px" />
          </Flex>
          <Text p="10px" fontSize="small" width="270px" height="75px" color="grey.300">
            A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
