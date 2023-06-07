import React from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import HeroSection from '@/components/hero-section';
import HeadingSection from '@/components/heading-section';
import { VideoCarousel } from '@/components/carousel';
import Research from '@/components/ResourcePage/research';
import Articles from '@/components/ResourcePage/articles';

export default function Resources() {
  return (
    <Box>
      <HeroSection backgroundImage={'/images/resources/header/civil-rights-protest-color.jpeg'} height="350px">
        <Heading as="h1" size="4xl" textTransform={'uppercase'}>
          Resources
        </Heading>
      </HeroSection>

      <HeadingSection
        imageUrl={'/images/resources/header/crt-book.jpeg'}
        header={'CRT RESOURCES'}
        text={'Critical Race Theory (CRT) is a complex and nuanced subject covering a lot of important and nuanced topics. The resources below were carefully curated and utilized to gather the information presented on this website, and we encourage you to explore these materials so that you can broaden your knowledge and contribute to meaningful conversations about this important topic.'}
      />

      <VideoCarousel sectionTitle={'VIDEOS'} />

      <HeroSection backgroundImage={'/images/resources/header/books.jpeg'} >
        <Flex direction={'column'} align={'left'} justify={'center'} mx={100} px={100} gap={10}>
          <Heading as={'h2'}>
            “Education leads to enlightenment. Enlightenment opens the way to empathy. Empathy foreshadows reform.”
          </Heading>
          <Text fontSize={'2xl'}>
            - Derrick A. Bell, lawyer & founding father of Critical Race Theory
          </Text>
        </Flex>
      </HeroSection>

      <Articles />

      <HeroSection backgroundImage={'/images/resources/header/protest-bw.jpeg'} >
        <Flex direction={'column'} align={'left'} justify={'center'} mx={100} px={100} gap={10}>
          <Heading as={'h2'}>
            "Injustic anywhere is a threat to justic everywhere."
          </Heading>
          <Text fontSize={'2xl'}>
            - Martin Luther King Jr.
          </Text>
        </Flex>
      </HeroSection>

      <Research />

      <HeroSection backgroundImage={'/images/resources/header/civil-rights-protest-color.jpeg'} />

    </Box>
  );
};