import { Box, Flex, Button, Image } from "@chakra-ui/react";

import { BsTrash } from "react-icons/bs";

interface CardModalProps {
  image: string;
  title: string;
  price: number;
}

const CardModal = ({ image, price, title }: CardModalProps) => {
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
      <Image borderRadius="lg" ml="1" bg="grey.0" boxSize="60px" mr="3" src={image} alt={title} />

      <Box fontSize="xs" w="90px">
        {title}
      </Box>

      <Box color="green.500" fontWeight="600">
        quantity
      </Box>

      <Button w="60px" bg="white.0">
        <BsTrash />
      </Button>
    </Flex>
  );
};

export default CardModal;
