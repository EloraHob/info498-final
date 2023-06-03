import React from 'react';
import { Box, Heading, Text, Link, Stack } from '@chakra-ui/react';

export default function Resources() {
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, purple.500, pink.500)"
        py={8}
        mb={8}
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={2} color="white">
          Resources
        </Heading>
        <Text color="white" fontSize="lg">
          Welcome to our Resources page! Explore the following links to learn more about critical race theory, intersectionality, and related topics.
        </Text>
      </Box>

      <Stack spacing={6}>
        <ResourceItem
          title="Critical Race and LatCrit Theory and Method: Counter-Storytelling"
          authors="Solorzano, D. G., & Yosso, T. J."
          year="2001"
          link="https://www.example.com/solorzano-yosso-2001"
        />

        <ResourceItem
          title="Equity and Diversity"
          authors="Colleen Lewis, Niral Shah, & Katrina Falkner"
          year="2019"
          link="https://www.example.com/lewis-shah-falkner-2019"
        />

        <ResourceItem
          title="A Lesson on Critical Race Theory"
          authors="George, Janel"
          year="2021"
          link="https://www.example.com/george-2021"
        />

        <ResourceItem
          title="Critical Race Theory for HCI"
          authors="Ogbonnaya-Ogburu, Smith, To, and Toyoma"
          year="2020"
          link="https://www.example.com/ogbonnaya-ogburu-2020"
        />

        <ResourceItem
          title="Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color"
          authors="Kimberly Crenshaw"
          year="1991"
          link="https://www.example.com/crenshaw-1991"
        />
      </Stack>
    </Box>
  );
};

const ResourceItem = ({ title, authors, year, link }) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
    >
      <Heading as="h2" size="md" mb={2} color="purple.600">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm" fontWeight="bold" mb={1}>
        Authors: {authors}
      </Text>
      <Text color="gray.600" fontSize="sm" fontWeight="bold" mb={1}>
        Year: {year}
      </Text>
      <Link
        color="blue.500"
        href={link}
        isExternal
        fontSize="sm"
        fontWeight="bold"
      >
        Read more
      </Link>
    </Box>
  );
};


// import { Box, Heading, VStack, Link, Text } from '@chakra-ui/react';

// export default function Resources() {
//   return (
//     <Box p={8}>
//       <Box align={'center'}>
//         <Heading as="h1" mb={4} fontSize="5xl" fontWeight="bold" color="red.500">
//           Resources
//         </Heading>
//         <Text fontSize="lg" mb={8} color="gray.600">
//           Discover a comprehensive collection of curated resources that delve into the latest topics and insights within our field. These resources have been carefully selected to provide you with valuable information and perspectives. Whether you're interested in critical race theory for HCI, exploring intersectionality and identity politics, or understanding violence against women of color, these references offer a wealth of knowledge. Take a look at the following resources we've gathered for you:
//         </Text>
//       </Box>
//       <VStack align="start" spacing={4}>
//         <Link
//           href="https://www.example.com/solorzano-yosso"
//           isExternal
//           color="blue.500"
//           fontWeight="bold"
//           _hover={{ color: 'blue.600' }}
//         >
//           Solorzano, D. G., & Yosso, T. J. (2001). Critical race and LatCrit theory and method: Counter-storytelling. International Journal of Qualitative Studies in Education
//         </Link>
//         <Link
//           href="https://www.example.com/lewis-shah-falkner"
//           isExternal
//           color="blue.500"
//           fontWeight="bold"
//           _hover={{ color: 'blue.600' }}
//         >
//           Colleen Lewis, Niral Shah, & Katrina Falkner (2019) “Equity and Diversity,” The Cambridge Handbook of Computing Education Research
//         </Link>
//         <Link
//           href="https://www.example.com/george"
//           isExternal
//           color="blue.500"
//           fontWeight="bold"
//           _hover={{ color: 'blue.600' }}
//         >
//           George, Janel. "A Lesson on Critical Race Theory." American Bar Association, 11 Jan. 2021.
//         </Link>
//         <Link
//           href="https://www.example.com/ogbonnaya-ogburu"
//           isExternal
//           color="blue.500"
//           fontWeight="bold"
//           _hover={{ color: 'blue.600' }}
//         >
//           Ogbonnaya-Ogburu, Smith, To, and Toyoma. "Critical Race Theory for HCI." CHI, 25 Apr. 2020.
//         </Link>
//         <Link
//           href="https://www.example.com/crenshaw"
//           isExternal
//           color="blue.500"
//           fontWeight="bold"
//           _hover={{ color: 'blue.600' }}
//         >
//           Kimberly Crenshaw. “Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color,” Stanford Law Review Jul. 1991.
//         </Link>
//       </VStack>
//     </Box>
//   );
// };
