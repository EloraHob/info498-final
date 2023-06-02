import { Box, Button, Container, Link, Flex, Grid, GridItem, Stack, Heading, Image, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <Box>
      <Box bg="purple.500" py={6}>
        <Container maxW="container.xl">
          <Heading color="white" textAlign="center" fontSize="4xl" mb={4}>
            Discover the Power of CRT and Intersectionality in the Tech Industry
          </Heading>
          <Image src='/public/images/hero-section.jpeg' alt="Hero Image" mx="auto" />
        </Container>
      </Box>

      <Container maxW="container.lg" py={8} textAlign="center">
        <Text fontSize="xl" mb={4} >
        Embark on a transformative journey through the interconnected web of race, gender, and 
        social dimensions within the tech industry. Gain insights into the history and significance
         of Critical Race Theory (CRT), listen to diverse voices and experiences in tech, and put your
          knowledge to the test with our engaging quiz. Select a card below to begin your exploration
           and dive deeper into the complexities and possibilities of a more inclusive future in tech.
        </Text>
        <Text fontSize="2xl" mb={4} textAlign="center" fontWeight={'bold'}>
          Let the journey begin!
        </Text>

        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6} mt={8}>
          {/* Example interactive icons */}
          <Box
            bg="yellow.400"
            p={6}
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            _hover={{ bg: "yellow.500" }}
          >
            <Image src="/pages/images/group-hands.jpeg" alt="Icon 1" mx="auto" mb={4} w={24} h={24} />
            <Text fontSize="xl" fontWeight="bold">Learn</Text>
            <Text mt={2}>Learn about the key principles and foundations of CRT in the tech industry. </Text>
          </Box>
          <Box
            bg="pink.400"
            p={6}
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            _hover={{ bg: "pink.500" }}
          >
            <Image src="/icon2.png" alt="Icon 2" mx="auto" mb={4} w={24} h={24} />
            <Text fontSize="xl" fontWeight="bold">Explore</Text>
            <Text mt={2}>Discover how Intersectionality plays a crucial role in understanding the complex dynamics of diversity and inclusion in tech.</Text>
          </Box>
          <Box
            bg="green.400"
            p={6}
            borderRadius="lg"
            textAlign="center"
            cursor="pointer"
            _hover={{ bg: "green.500" }}
          >
            <Image src="/icon3.png" alt="Icon 3" mx="auto" mb={4} w={24} h={24} />
            <Text fontSize="xl" fontWeight="bold">Quiz</Text>
            <Text mt={2}>Explore real-world case studies that demonstrate the practical application of CRT and Intersectionality in the tech industry.</Text>
          </Box>
        </Box>

        <Box mt={10} textAlign="center">
          <Button
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            px={12}
            py={6}
            fontWeight="bold"
            boxShadow="lg"
            rightIcon={<FaChevronRight />}
          >
            Done having fun? Check out our resources
          </Button>
        </Box>
      </Container>
    </Box>
  );
}