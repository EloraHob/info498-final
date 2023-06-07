import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

function Card({ imageSrc, year, name, organization, description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Box bg="white" borderRadius="md" boxShadow="md" p={6} maxW="1000px">
      <Box maxW="100%" h={400} mb={4} borderRadius="md" overflow="hidden">
        <Image src={imageSrc} alt={name} objectFit="cover" w="100%" h="100%" />
      </Box>
      <Text
        color="blue.500"
        textTransform="uppercase"
        fontWeight={800}
        fontSize="md"
        letterSpacing={1.1}
      >
        {year}
      </Text>
      <Heading color="gray.700" fontSize="2xl" fontFamily="body" py={2}>
        {name + " | " + organization}
      </Heading>
      <Box
        color="gray.700"
        mb={4}
        whiteSpace="pre-line"
        noOfLines={showFullDescription ? undefined : 3}
      >
        {"\"" + description + "\""}
      </Box>
      <Button colorScheme="blue" onClick={toggleDescription} variant='link'>
        {showFullDescription ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
}

export default Card;
