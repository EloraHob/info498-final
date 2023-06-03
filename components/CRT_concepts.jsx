import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Icon,
  Flex,
  useColorModeValue,
  chakra,
  HStack,
} from '@chakra-ui/react';
import { FaUsers, FaGlobe, FaBuilding, FaBookOpen, FaLightbulb } from 'react-icons/fa';

const CRTSection = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <CRTDefinition />

        <Text fontSize="xl" fontWeight="bold">
          Explore the Key Principles of Critical Race Theory
        </Text>

        <Stack direction={['column', 'row']} spacing={8} align={['center', 'flex-start']}>
          <FeatureCard
            icon={FaGlobe}
            title="Social Construction of Race"
            description="Race is not determined by biology but is shaped by historical, cultural, and political factors."
          />
          <FeatureCard
            icon={FaBuilding}
            title="Structural and Institutional Racism"
            description="Examines how racism is embedded in social structures, institutions, and policies, perpetuating racial inequalities."
          />
          <FeatureCard
            icon={FaUsers}
            title="Intersectionality"
            description="Recognizes that individuals can face multiple forms of oppression based on race, gender, class, and other social identities."
          />
        </Stack>
      </VStack>
    </Box>
  );
};

const CRTDefinition = () => {
  return (
    <Box
      bg="blue.500"
      borderRadius="md"
      boxShadow="lg"
      color="white"
      textAlign="center"
      width="100%"
    >
      <VStack spacing={6} align="center" p={8}>
        <Heading as="h1" size="2xl">
          Let's Explore Critical Race Theory!
        </Heading>

        <Text fontSize="xl">
          Critical Race Theory (CRT) helps us understand how race and racism are part of our society.
        </Text>

        <Stack direction="row" spacing={6} justify="center">
          <FeatureIcon icon={FaUsers} label="Intersectionality" />
          <FeatureIcon icon={FaGlobe} label="Social Construction" />
          <FeatureIcon icon={FaBuilding} label="Structural Racism" />
          <FeatureIcon icon={FaBookOpen} label="Counterstorytelling" />
          <FeatureIcon icon={FaLightbulb} label="Interest Convergence" />
        </Stack>
      </VStack>
    </Box>
  );
};

const FeatureIcon = ({ icon, label }) => {
  return (
    <VStack spacing={2}>
      <Icon as={icon} boxSize={10} color="yellow.300" />
      <Text fontWeight="bold">{label}</Text>
    </VStack>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      position="relative"
      w="full"
      maxW="md"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="2xl"
      rounded="md"
      p={6}
      cursor="pointer"
      onClick={handleCardClick}
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
    >
      <FlipCard isFlipped={isFlipped}>
        <FlipCardFront>
          <Icon as={icon} boxSize={12} color="blue.500" />
          <Heading as="h2" size="lg" mt={4} mb={2}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </FlipCardFront>
        <FlipCardBack>
          <VStack spacing={4}>
            <Text fontWeight="bold">Additional Content</Text>
            {/* Add additional text and imagery here */}
          </VStack>
        </FlipCardBack>
      </FlipCard>
    </Box>
  );
};

const FlipCard = ({ isFlipped, children }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      h="full"
      transformStyle="preserve-3d"
      transition="transform 0.6s"
      transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'}
    >
      {children}
    </Flex>
  );
};

const FlipCardFront = chakra('div', {
  baseStyle: {
    position: 'absolute',
    w: 'full',
    h: 'full',
    backfaceVisibility: 'hidden',
  },
});

const FlipCardBack = chakra('div', {
  baseStyle: {
    position: 'absolute',
    w: 'full',
    h: 'full',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
});

export default CRTSection;
