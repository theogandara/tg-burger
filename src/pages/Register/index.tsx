import { Flex, Text, Heading, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/Auth";

const SignInSchema = yup.object().shape({
  name: yup.string().required("*Nome obrigatório").min(2,"*Nome muito curto"),
  email: yup
    .string()
    .required("*Email obrigatório")
    .email("*Digite um email válido"),
  password: yup.string().required("*Senha obrigatória").min(6, "*Senha fraca"),
  confirm_password: yup.string().required("*Confirme sua senha").min(6, "*Senha fraca").oneOf([yup.ref('password'), null], '*As senhas são diferentes'),
});


interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {

  const { signUp } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RegisterData>({
    resolver: yupResolver(SignInSchema),
  });


const history = useHistory()

  const handleSignIn = (data: RegisterData) => {
    signUp(data)
  }

  return (
    <Flex
      height={["auto", "auto", "100vh", "100vh"]}
      background="white.0"
      padding="10px 15px"
      alignItems="center"
      justifyContent="space-evenly"
      w="100vw"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "row-reverse",
        "row-reverse",
      ]}
    >
      <Flex
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
        alignSelf="center"
        flexDirection="column"
      >
        <Heading
          display="flex"
          alignItems="baseline"
          mt="5px"
          w="90%"
          ml="3"
          fontSize="md"
        >
          Cadastro
          <Text
            mt="3"
            w="80%"
            color="grey.300"
            textAlign="center"
            fontSize="xs"
            as='u'
          >
            <Link to="/">Retornar para o Login</Link>
          </Text>
        </Heading>
        <VStack mt="6" spacing="4">
          <Input
            placeholder="Insira seu nome"
            label="Nome"
            error={errors.name}
            {...register("name")}
          />
          <Input
            type="email"
            placeholder="Insira seu email"
            label="Email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="Crie uma senha"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />

          <Input
            type="password"
            placeholder="Confirme sua senha"
            label="Confirme sua senha"
            error={errors.confirm_password}
            {...register("confirm_password")}
          />
        </VStack>

        <Button
          _hover={{ backgroundColor: "grey.0" }}
          color="grey.300"
          fontSize="sm"
          background="grey.100"
          mt="20px"
          w="80vw"
          maxWidth="350px"
          type="submit"
        >
          Cadastrar
        </Button>
      </Flex>

      <Flex
        height="200px"
        mb="20px"
        flexDirection="column"
        width="100vw"
        alignItems="center"
        maxWidth="350px"
        ml={["0", "0", "20px", "20px"]}
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
          <Text
            p="10px"
            fontSize="small"
            width="270px"
            height="75px"
            color="grey.300"
          >
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
