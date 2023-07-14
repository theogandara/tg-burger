import Card from "../../components/Cards/index";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";
import CardModal from "../../components/CardModal";
import { useAuth } from "../../contexts/Auth";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {
  const { loadProducts, Logout, products, cart, removeAll } = useAuth();

  useEffect(() => {
    loadProducts();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDirection="column" w="100%">
        <Flex
          alignItems="center"
          justifyContent={["center", "center", "space-around"]}
          flexWrap="wrap"
          w="100%"
          h={["120px", "120px", "60px"]}
          bg="grey.0"
        >
          <Heading
            fontSize="lg"
            fontFamily="body"
            display={["flex", "flex", "flex"]}
            alignItems="baseline"
            m="5"
            w="140px"
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

          <Flex>
            <InputGroup bg="white.0" w={["180px", "300px", "300px", "300px"]}>
              <Input
                fontSize={["xs", "xs", "xs", "sm"]}
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
                {cart.length > 0 && (
                  <Text
                    h="13px"
                    display="flex"
                    justifyContent="center"
                    fontSize="9px"
                    position="absolute"
                    left="26px"
                    top="7px"
                    bg="green.500"
                    borderRadius="50%"
                    color="white.0"
                    w="13px"
                    alignItems="center"
                  >
                    {cart.length}
                  </Text>
                )}

                <AiOutlineShoppingCart />
              </Button>
              <Button onClick={() => Logout()} bg="grey.0" w="50px" ml="1">
                <FiLogOut />
              </Button>
            </Flex>
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
              category={product.category}
              image={product.img}
              price={product.price}
              title={product.name}
              key={product.id}
              product={product}
            />
          ))}
        </Flex>
      </Flex>

      <Modal
        size="md"
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay color="white.0" />
        <ModalContent>
          <ModalHeader color="white.0" bg="green.500">
            Carrinho de compras
          </ModalHeader>
          <ModalCloseButton color="white.0" />

          {cart.length < 1 && (
            <Text h="40px " w="100%" mt="6" textAlign="center">
              Sua sacola está vazia
            </Text>
          )}

          {/* itens do carrinho */}
          <ModalBody h={["300px", "350px", "400px"]} w="100%">
            {cart.map((cartProduct) => (
              <CardModal
                image={cartProduct.img}
                title={cartProduct.name}
                key={cartProduct.id}
                product={cartProduct}
              />
            ))}
          </ModalBody>

          <ModalFooter>
            <Button color="green.500" mr={3} onClick={onClose}>
              Finalizar compra
            </Button>
            <Button onClick={() => removeAll()} variant="ghost">
              Excluir todos
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
