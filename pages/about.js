import { Box, Heading, Link, Text } from '@chakra-ui/react';

const ReferencesPage = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6} color="teal.500">
        References
      </Heading>
      <Box mb={4}>
        <Heading as="h2" size="lg" color="purple.500" mb={2}>
          Critical Race Theory (CRT)
        </Heading>
        <Text mb={2}>
          1. Delgado, R., & Stefancic, J. (2017). Critical race theory: An introduction. NYU Press.
          <Link href="https://www.example.com" isExternal color="teal.500" ml={2}>
            [Link]
          </Link>
        </Text>
        <Text mb={2}>
          2. Crenshaw, K. (1991). Mapping the margins: Intersectionality, identity politics, and violence against women of color. Stanford Law Review, 43(6), 1241-1299.
          <Link href="https://www.example.com" isExternal color="teal.500" ml={2}>
            [Link]
          </Link>
        </Text>
      </Box>
      <Box>
        <Heading as="h2" size="lg" color="orange.500" mb={2}>
          Intersectionality in Tech
        </Heading>
        <Text mb={2}>
          1. Hancock, A.-M. (2016). Intersectionality: An intellectual history. Oxford University Press.
          <Link href="https://www.example.com" isExternal color="teal.500" ml={2}>
            [Link]
          </Link>
        </Text>
        <Text mb={2}>
          2. Noble, S. U. (2018). Algorithms of oppression: How search engines reinforce racism. NYU Press.
          <Link href="https://www.example.com" isExternal color="teal.500" ml={2}>
            [Link]
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default ReferencesPage;


// import { Box, Heading, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";

// export default function About() {
//   return (
//     <Box p={8}>
//       <Heading as="h1" mb={4} fontSize="2xl" fontWeight="bold">Resources</Heading>
//       <Text fontSize="lg" mb={8}>
//         Discover a comprehensive collection of curated resources that delve into the latest topics and insights within our field. These resources have been carefully selected to provide you with valuable information and perspectives. Whether you're interested in critical race theory for HCI, exploring intersectionality and identity politics, or understanding violence against women of color, these references offer a wealth of knowledge. Take a look at the following resources we've gathered for you:
//       </Text>
//       <Box>
//         <Heading as="h2" fontSize="xl" mt={4} mb={2}>A Lesson on Critical Race Theory</Heading>
//         <Text fontSize="md" mb={4}>Janel George, American Bar Association, 11 Jan. 2021</Text>
//         <Link color="blue.500" href="https://example.com/critical-race-theory-lesson">Read article</Link>
//       </Box>
//       <Box>
//         <Heading as="h2" fontSize="xl" mt={4} mb={2}>Critical Race Theory for HCI</Heading>
//         <Text fontSize="md" mb={4}>Ihudiya Finda Ogbonnaya-Ogburu, Angela D. R. Smith, Alexandra To, Kentaro Toyama, CHI, 25 Apr. 2020</Text>
//         <Link color="blue.500" href="https://example.com/critical-race-theory-hci">Read article</Link>
//       </Box>
//       <Box>
//         <Heading as="h2" fontSize="xl" mt={4} mb={2}>Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color</Heading>
//         <Text fontSize="md" mb={4}>Kimberly Crenshaw, Stanford Law Review, Jul. 1991</Text>
//         <Link color="blue.500" href="https://example.com/mapping-the-margins">Read article</Link>
//       </Box>
//     </Box>
//   );
// };

