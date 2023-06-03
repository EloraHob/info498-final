import React from 'react';
import { Box, Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react';

export default function CRTExamples() {
  return (
    <Box p={6} bg="purple.50">
      <VStack spacing={8} align="start">
        <Heading as="h2" size="lg" color="purple.800" mb={4}>
          Examples of CRT in Tech
        </Heading>

        <Grid templateColumns="repeat(1, 1fr)" gap={8}>
          <GridItem>
            <Box p={6} bg="purple.200" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={2} color="purple.800">
                Google
              </Heading>
              <Text color="purple.800">
                In 2020, Google announced that it would be taking steps to address racial bias in its artificial intelligence (AI) systems. These steps included hiring more Black and brown engineers, developing new AI algorithms that are less likely to discriminate, and creating a new research center focused on AI and racial justice.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box p={6} bg="blue.200" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={2} color="blue.800">
                Microsoft
              </Heading>
              <Text color="blue.800">
                In 2021, Microsoft announced that it would be investing $100 million in a new initiative to promote racial equity and justice. The initiative will focus on areas such as education, economic opportunity, and criminal justice reform.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box p={6} bg="green.200" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={2} color="green.800">
                Amazon
              </Heading>
              <Text color="green.800">
                In 2022, Amazon announced that it would be creating a new team to focus on racial equity and justice. The team will work to ensure that Amazon's products and services are inclusive and accessible to all people, regardless of race or ethnicity.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};