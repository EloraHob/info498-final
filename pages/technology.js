import React from 'react';
import { Box, Flex, Text, Heading} from '@chakra-ui/react';
import HeroSection from '@/components/hero-section';
import { CardCarousel }  from '@/components/carousel';
import HeaderSection from '@/components/heading-section';
import VerticalTimeline from '@/components/TechnologyPage/timeline';


function Technology() {

  return (
    <Box>
      {/* Image banner/hero section */}
      <HeroSection backgroundImage={'/images/technology/header/civil-rights-mural.jpeg'} height="350px">
        <Heading as="h1" size="4xl" textTransform={'uppercase'}>
          Technology
        </Heading>
      </HeroSection>

      {/* Header section */}
      <Box bg={'#F5F5F5'}>
      <HeaderSection
        flipColumns={true}
        imageUrl={'/images/technology/header/engineers.jpeg'}
        header={'CRT in Technology'}
        text={'In the context of technology, CRT gained prominence in the late 20th century as scholars and activists began to critically analyze the impact of race on technological development and its consequences for marginalized communities. It emphasizes the underrepresentation of marginalized groups in technology-related fields and the digital divide that disproportionately affects communities of color, and through this analysis CRT aims to uncover and challenge the systemic barriers and discriminatory practices that perpetuate racial inequalities.'}
      />
      </Box>

      {/* Timeline component */}
      <Box bg={'#1A365D'} py={20}>
        <VerticalTimeline heading={'EVOLUTION OF CRITICAL RACE THEORY IN TECH'}/>
      </Box>

      {/* Quote banner */}
      <Box bg={'#F5F5F5'} py={1}>
        <HeroSection backgroundImage={'/images/technology/header/women.jpeg'} >
          <Flex direction={'column'} align={'left'} justify={'center'} mx={100} px={100} gap={8}>
            <Heading as={'h2'}>
              "The story of black women is critical because those who don't know their history are doomed to repeat it."
            </Heading>
            <Text fontSize={'2xl'}>
              - Kimberlé Crenshaw, American civil rights advocate and a leading scholar of critical race theory
            </Text>
          </Flex>
        </HeroSection>

        {/* Case Studies component */}
        <CardCarousel sectionTitle={'CASE STUDIES'} />
      </Box>

      {/* Image banner */}
      <HeroSection backgroundImage={'/images/technology/header/equality-art.jpeg'} />

    </Box>
  );
}

export default Technology;
