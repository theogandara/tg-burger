import { Box, Button, Image, Badge } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface CardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  product: Product;
}

const Card = ({ image, title, category, price, product }: CardProps) => {

  const { addCart } = useAuth();

  return (
    <Box
      m="5"
      w="250px"
      h="310px"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      borderColor="grey.100"
      boxShadow="md"
    >
      <Box display="flex" bg="grey.0" justifyContent="center">
        <Image boxSize="150px" src={image} alt={title} />
      </Box>

      <Box m="5px" textAlign="center">
        <Badge
          fontSize="xs"
          borderRadius="full"
          px="4"
          color="green.500"
          bg="green.1"
        >
          {category}
        </Badge>
      </Box>
      <Box ml="3" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
        {title}
      </Box>

      <Box mt="2" ml="3" color="green.500" fontWeight="600">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </Box>
      <Box textAlign="center">
        <Button onClick={()=>addCart(product)}  bg="green.500" color="white.0" mt="2">
          Adicionar
        </Button>
      </Box>
    </Box>
  );
};
export default Card;
