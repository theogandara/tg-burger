import { Box, Button, Image, Badge } from "@chakra-ui/react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ image, title, description, price }: CardProps) => {
  return (
    <Box
      m="5"
      w="250px"
      h="310px"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      borderColor="grey.100"
      boxShadow='md'
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
          {description}
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
        <Button bg="green.500" color="white.0" mt="2">
          Adicionar
        </Button>
      </Box>
    </Box>
  );
};
export default Card;
