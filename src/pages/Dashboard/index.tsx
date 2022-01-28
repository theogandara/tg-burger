import Card from "../../components/Cards/index";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Hamburguer",
    category: "Sanduíches",
    price: 14.0,
    img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
  },
  {
    id: 2,
    name: "X-Burguer",
    category: "Sanduíches",
    price: 16.0,
    img: "https://i.ibb.co/djbw6LV/x-burgue.png",
  },
  {
    id: 3,
    name: "Big Kenzie",
    category: "Sanduíches",
    price: 18.0,
    img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
  },
  {
    id: 4,
    name: "Fanta Guaraná",
    category: "Bebidas",
    price: 5.0,
    img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
  },
  {
    id: 5,
    name: "Coca",
    category: "Bebidas",
    price: 4.99,
    img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
  },
  {
    id: 6,
    name: "Fanta",
    category: "Bebidas",
    price: 4.99,
    img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
  },
  {
    id: 1,
    name: "Hamburguer",
    category: "Sanduíches",
    price: 14.0,
    img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
  },
  {
    id: 2,
    name: "X-Burguer",
    category: "Sanduíches",
    price: 16.0,
    img: "https://i.ibb.co/djbw6LV/x-burgue.png",
  },
];

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDirection="column" w="100%" >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          w="100%"
          h="60px"
          bg="grey.0"
        >
          <Heading
            fontSize="lg"
            fontFamily="body"
            display={["none", "flex", "flex"]}
            alignItems="baseline"
            m="5"
            w="50%"
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

          <InputGroup bg="white.0" w={["180px", "300px", "300px", "300px"]}>
            <Input
              fontSize={["xs", "xs", "xs", "md"]}
              placeholder="Digitar Pesquisa"
            />
            <InputRightElement mr="2">
              <Button h="1.75rem" bg="green.500" size="sm">
                <BiSearch color="#fff" />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex ml="2" flexDirection="row" flexWrap="nowrap">
            <Button bg="grey.0" w="50px" ml="1" onClick={onOpen}>
              <AiOutlineShoppingCart />
            </Button>
            <Button bg="grey.0" w="50px" ml="1">
              <FiLogOut />
            </Button>
          </Flex>
        </Flex>

        {/* produtos */}

        <Flex
          h={["auto", "auto", "auto", "auto"]}
          w="100%"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          flexDirection="row"
          p="10px 15px"
        >
          {products.map((product) => (
            <Card
              description={product.category}
              image={product.img}
              price={product.price}
              title={product.name}
              key={product.id}
            />
          ))}
        </Flex>
      </Flex>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay color="white.0" />
        <ModalContent>
          <ModalHeader color="white.0" bg="green.500">
            Carrinho de compras
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Sua sacola está vazia</ModalBody>

          <ModalFooter>
            <Button color="green.500" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Excluir todos</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
