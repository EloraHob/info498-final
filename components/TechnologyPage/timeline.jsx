import React from 'react';
import {
  Box,
  Container,
  Text,
  Image,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading
} from '@chakra-ui/react';

const events = [
    {
        id: 1,
        image: "/images/technology/timeline/crt.png",
        date: "1980s",
        title: "Introduction of Critical Race Theory",
        description:
            "Critical Race Theory (CRT) is first developed by legal scholars in the United States.",
    },
    {
        id: 2,
        image: "/images/technology/timeline/kimberle-crenshaw.jpeg",
        date: "1980s",
        title: "Race, Reform, and Retrenchment: Transformation and Legitimation in Antidiscrimination Law.",
        description:
            "Kimberlé Crenshaw's groundbreaking essay is published, building the foundation of CRT and setting the stage for its application in various fields, including technology.",
    },
    {
        id: 3,
        image: "/images/technology/timeline/digital-divide.png",
        date: "2000s",
        title: "Digital Divide and Racial Disparities",
        description:
            "CRT is used to highlight the underrepresentation of marginalized groups in technology-related fields and the digital divide that disproportionately affects communities of color.",
    },
    {
        id: 4,
        image: "/images/technology/timeline/justice.jpeg",
        date: "2010s",
        title: "Critical Race Theory for Justice",
        description:
            "CRT is used to examine and address the ways in which technology can reinforce and perpetuate racial injustices, while also striving to create a more equitable and just technological landscape that benefits all members of society.",
    },
    {
        id: 5,
        image: "/images/technology/timeline/ferguson.jpeg",
        date: "2014",
        title: "Ferguson Protests and Algorithmic Bias",
        description:
            "Concerns arise regarding the biased use of algorithms in policing and criminal justice systems. Activists and scholars draw attention to how algorithmic bias can disproportionately target communities of color and perpetuate racial inequalities.",
    },
    {
        id: 6,
        image: "/images/technology/timeline/facial-recognition.jpeg",
        date: "2018",
        title: "Facial Recognition and Racial Bias",
        description:
            "Research by Joy Buolamwini at the MIT Media Lab reveals that facial recognition technologies from prominent companies exhibit racial biases, misidentifying darker-skinned individuals more frequently than lighter-skinned individuals. This finding sparks a critical examination of the racial bias embedded in facial recognition systems and prompts calls for improved ethical standards in their development and deployment.",
    },
    {
        id: 7,
        image: "/images/technology/timeline/blm.jpeg",
        date: "2020s",
        title: "BLM and Tech Accountability",
        description:
            "CRT becomes a more widely discussed topic in the tech industry, as companies and organizations begin to grapple with the ways in which race and racism shape the tech industry. The BLM movement and the killing of George Floyd prompts a widespread reckoning with racial injustice, including within the tech industry. Companies face increased scrutiny for their role in perpetuating racial bias.",
    },
    {
        id: 8,
        date: "2020",
        image:"/images/technology/timeline/google-microsoft.jpeg",
        title: "Google and Microsoft",
        description: "Google and Microsoft announce that they would be investing in programs to increase diversity and inclusion in the tech industry.",
    },
    {
        id: 9,
        date: "2022",
        image:"/images/technology/timeline/meta-twitter.png",
        title: "Twitter and Meta",
        description: "Twitter and Meta announced that they would be banning users who spread misinformation about CRT.",
    },

];

const Milestones = ({heading}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <Heading as='h2' fontSize="5xl" fontWeight="bold" mb={18} pb={20} color={'white'} textAlign="center">
        {heading}
      </Heading>
      {events.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, image, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block',
      }}
    >
      <VStack align="center" w="100%">
        {/* Render the image at the top */}
        {image && (
          <Image src={image} alt="Milestone Image" objectFit="cover" borderRadius="md" />
        )}
        <Box>
          <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
            {date}
          </Text>

          <VStack spacing={2} mb={3} textAlign="left">
            <Heading as="h1" fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
              {title}
            </Heading>
            <Text fontSize="md">{description}</Text>
          </VStack>
        </Box>
      </VStack>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >

    {/* Render the timeline line */}
      <Box
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderRadius={'full'}
        borderColor={'blue.200'}
        top="0px"
      />

      {/* Render the dots in the timeline */}
      <Box pos="relative" p="15px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('orange.500', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        />
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;