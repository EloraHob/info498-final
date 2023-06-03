import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Stack,
    Icon,
    Button,
    HStack,
    StackDivider,
    IconButton,
    Tooltip,
   
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import Timeline from '@/components/CRT_timeline';
import CRTExamples from '@/components/CRT_tech';
import { FaUsers, FaGlobe, FaBuilding, FaBookOpen, FaLightbulb } from 'react-icons/fa';


import { InfoIcon } from '@chakra-ui/icons';
import CRTSection from '@/components/CRT_concepts';

const events = [
    { date: '2022-01-01', title: 'Event 1' },
    { date: '2022-02-01', title: 'Event 2' },
    { date: '2022-03-01', title: 'Event 3' },
    // Add more events as needed
  ];

const TimelineItem = ({ date, title, children }) => {
    return (
        <Flex align="start">
            <TimelineSeparator>
                <TimelineDot bg="blue.500" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box p={4}>
                    <Heading as="h3" size="md" mb={2}>
                        {date}
                    </Heading>
                    <Text fontWeight="bold" mb={2}>
                        {title}
                    </Text>
                    <Text>{children}</Text>
                </Box>
            </TimelineContent>
        </Flex>
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
    return (
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
        width={['100%', '30rem']}
        textAlign="center"
      >
        <Icon as={icon} boxSize={10} color="blue.500" />
        <Heading as="h2" size="lg" mt={4} mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    );
  };

export default function Learn() {
    return (
        <Box p={2}>
            <VStack spacing={8} align="start">
                <Box
                    p={8}
                    bg="blue.500"
                    borderRadius="md"
                    boxShadow="lg"
                    color="white"
                    textAlign="center"
                    width={'100%'}
                >
                    <VStack spacing={6} align="center">
                        <Heading as="h1" size="2xl">
                            Let's Explore Critical Race Theory!
                        </Heading>

                        <Text fontSize="xl">
                            Critical Race Theory (CRT) helps us understand how race and racism are part of our society.
                        </Text>

                        <Stack direction="row" spacing={100} justify="center">
                            <FeatureIcon icon={FaUsers} label="Intersectionality" />
                            <FeatureIcon icon={FaGlobe} label="Social Construction" />
                            <FeatureIcon icon={FaBuilding} label="Structural Racism" />
                            <FeatureIcon icon={FaBookOpen} label="Counterstorytelling" />
                            <FeatureIcon icon={FaLightbulb} label="Interest Convergence" />
                        </Stack>
                    </VStack>
                </Box>


                    {/* <CRTSection /> */}
                    {/* <Timeline /> */}
                    <CRTExamples />
                    {/* <Box>
          <Heading as="h2" size="lg" mb={4}>
            The Importance of CRT in Tech
          </Heading>
          <Text>
            Critical Race Theory plays a crucial role in addressing systemic racism within the tech
            industry. By recognizing and challenging racial biases, tech professionals can work
            towards creating inclusive and equitable systems, products, and opportunities.
          </Text>
        </Box> */}
            </VStack>
        </Box>
    );
};

        // {/* <Box>
        //   <Heading as="h2" size="lg" mb={4}>
        //     Interactive Timeline - History of Critical Race Theory in Tech
        //   </Heading>
        //   <Timeline align="alternate">
        //     <TimelineItem date="1970s" title="Origins of CRT">
        //       Critical Race Theory emerged as a legal framework to address racial inequality.
        //     </TimelineItem>
        //     <TimelineItem date="1980s" title="CRT in Academia">
        //       CRT gained prominence in academic disciplines beyond law, including education and
        //       sociology.
        //     </TimelineItem>
        //     <TimelineItem date="1990s" title="CRT in Tech">
        //       CRT began to influence discussions around race and technology, focusing on
        //       inequalities and biases in tech industries.
        //     </TimelineItem>
        //     {/* Add more timeline items as needed */}
        //   </Timeline>
        // </Box> */}