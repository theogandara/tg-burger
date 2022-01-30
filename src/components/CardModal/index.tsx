import { Box, Flex, Button, Image } from "@chakra-ui/react";

import { BsTrash } from "react-icons/bs";
import { useAuth } from "../../contexts/Auth";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface CardModalProps {
  image: string;
  title: string;
  product: Product;
}

const CardModal = ({ image, title, product }: CardModalProps) => {
  const { removeCart } = useAuth();

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      borderColor="grey.100"
      w="100%"
      mt="3"
      justifyContent="space-around"
      boxShadow="lg"
      alignItems="center"
      h="90px"
    >
      <Image
        borderRadius="lg"
        ml="1"
        bg="grey.0"
        boxSize="60px"
        mr="3"
        src={image}
        alt={title}
      />

      <Box fontSize="xs" w="90px">
        {title}
      </Box>

      <Box color="green.500" fontWeight="600">
        1
      </Box>

      <Button onClick={() => removeCart(product)} w="60px" bg="white.0">
        <BsTrash />
      </Button>
    </Flex>
  );
};

export default CardModal;
