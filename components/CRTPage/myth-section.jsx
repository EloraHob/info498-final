import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  chakra,
} from '@chakra-ui/react';

const MythSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const myths = [
    {
      myth: 'CRT is being taught in K-12 schools.',
      fact:
        'CRT is a college-level theory that emerged as a movement in the field of legal scholarship in the late 1970s to address the limitations of traditional legal analysis in understanding and addressing systemic racism.',
      quote: 'Education leads to enlightenment. Enlightenment opens the way to empathy. Empathy foreshadows reform.',
      author: 'Derrick A. Bell, lawyer & founding father of Critical Race Theory',
    },
    {
      myth: 'CRT is a form of Marxism.',
      fact: 'CRT is a legal theory that emerged in the 1970s. It is not based on Marxism, but rather on critical theory, a school of thought that emerged in the 1930s.',
    },
    {
      myth: 'CRT teaches that all white people are inherently racist.',
      fact: 'CRT acknowledges that individuals can hold biases and benefit from systemic racism, but it does not label all white people as racists by default.',
      quote: 'The problem is not bad people. The problem is a system that reproduces bad outcomes.',
      author: 'Mari Matsuda, University of Hawaii law professor',
    },
    {
      myth: 'CRT is an anti-American ideology.',
      fact: 'CRT provides a framework to examine how race and racism have shaped American institutions and policies, with the goal of promoting equality and justice\- values that are foundational to American society.',
      quote: '... We believe in the 13th, 14th, 15th amendments, we believe in the promises of equality, and we know we can\'t get there if we can\'t confront and talk honestly about inequality.',
      author: 'Kimberlé Crenshaw, UCLA law professor & Civil Rights Activist',
    },
    {
      myth: 'CRT promotes reverse racism.',
      fact: 'CRT rejects the notion of racial superiority or inferiority. CRT emphasizes the idea that race is a social construct that has been used historically to justify and perpetuate inequalities and power imbalances. The goal of CRT is to analyze and challenge these systemic inequities to achieve social justice and equity.',
    },
  ];

  return (
    <Flex p={10} justifyContent="center" alignItems="center">
      <Box w="600px" p={4} bg="gray.200" borderRadius="md" shadow="md">
        <Heading as="h2" fontSize="3xl" fontWeight="bold" mb={4} color={'red.500'}>
          SETTING THE RECORD STRAIGHT
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          There's a lot of conflicting information about Critical Race Theory in the news these days, and it can be
          difficult to know what's true. Let's take a moment to separate fact from fiction and discuss a few of the most
          common myths surrounding Critical Race Theory:
        </Text>
        <Accordion allowMultiple>
          {myths.map(({ myth, fact, quote, author }, index) => (
            <AccordionItem key={index} pt={3}>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'red.500', color: 'white' }}
                  bg="gray.100"
                  borderRadius="md"
                  p={4}
                  mb={4}
                  onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
                >
                  <Flex alignItems="center" justifyContent="space-between" width="100%">
                    <chakra.span
                      fontWeight="bold"
                      color={expandedIndex === index ? 'white' : 'black'}
                      mr={2}
                      transition="color 0.2s"
                    >
                      MYTH:
                    </chakra.span>
                    <Text flex="1" textAlign="left">{myth}</Text>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
              </h2>
              <AccordionPanel bg="white" borderRadius="md" p={4}>
                <Box>
                  <Text fontWeight="bold" color="blue.500">
                    FACT:
                  </Text>
                  {fact}
                </Box>
                {quote && (
                  <Box mt={4}>
                    <Text fontStyle="italic">"{quote}"</Text>
                    <Text mt={2} textAlign="right" fontWeight="bold">
                      - {author}
                    </Text>
                  </Box>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default MythSection;
