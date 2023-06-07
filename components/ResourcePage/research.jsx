import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const resourceData = [
  {
    title: "Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color",
    authors: "Kimberly Crenshaw",
    year: "1991",
    link: "https://www.jstor.org/stable/1229039"
  },
  {
    title: "Critical Race and LatCrit Theory and Method: Counter-Storytelling",
    authors: "Solorzano, D. G., & Yosso, T. J.",
    year: "2001",
    link: "https://www.sjsu.edu/people/marcos.pizarro/courses/8021/s1/SolorzanoYosso2001.pdf"
  },
  {
    title: "Equity and Diversity",
    authors: "Colleen Lewis, Niral Shah, & Katrina Falkner",
    year: "2019",
    link: "https://www.cambridge.org/core/books/abs/cambridge-handbook-of-computing-education-research/equity-and-diversity/43A022269D3BEE8CE1AD0AD8BBEDFF1B"
  },
  {
    title: "Critical Race Theory for HCI",
    authors: "Ogbonnaya-Ogburu, Smith, To, and Toyoma",
    year: "2020",
    link: "https://iogburu.people.si.umich.edu/articles/CHI2020.pdf"
  },
  {
    title: "A Lesson on Critical Race Theory",
    authors: "George, Janel",
    year: "2021",
    link: "https://www.civicway.org/saving-democracy/critical-race-theory-fact-versus-fiction/?gclid=CjwKCAjw1YCkBhAOEiwA5aN4AbDm-PrcyZKSulAFd06xNRcPbXb3Sa5fb2VHci8CVOOX6BaoIFiVnBoCUIAQAvD_BwE"
  },
  {
    title: "The Causes and Trends of the Digital Divide",
    authors: "Rishika Sahav",
    year: "2007",
    link: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=faba2e849dcf0455ba1b4721480077a183a74bd4",
  }
];

export default function Research() {
  return (
    <Stack direction={'column'} justify={'center'} align={'center'} py={20} bg={'#F5F5F5'}>
      <Heading as={'h2'} fontSize={'5xl'} pb={20}>
        ARTICLES
      </Heading>
      <Stack justifyContent="center" gap={10}>
        {resourceData.map((research, index) => (
          <Box
            key={index}
            minW={'445px'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            mb={6}
          >
            <Box p={6}>
              <Text
                color={'orange.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
                mb={3}
              >
                {research.year}
              </Text>
              <Heading
                color={'gray.700'}
                fontSize={'2xl'}
                fontFamily={'body'}
                mb={4}
              >
                {research.title}
              </Heading>
              <Text>
                {research.authors}
              </Text>
              <Button colorScheme="orange" href={research.link} mt={10}>
                Check it out
              </Button>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
