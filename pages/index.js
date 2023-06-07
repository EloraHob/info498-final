import { Box, Flex, Image, Heading, Text, } from "@chakra-ui/react";
import HeroSection from "@/components/hero-section";
import HeaderSection from "@/components/heading-section";
import MythSection from "@/components/CRTPage/myth-section";
import VocabGrid from "@/components/CRTPage/vocab-grid";

export default function Home() {

  return (
    <Box>
      <HeroSection backgroundImage={'/images/homepage/header/crowd-protest.jpeg'} height="650px">
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight={'bold'} pb={10}>
            WHAT IS
          </Text>
          <Heading as="h1" fontSize={'8xl'}>
            CRITICAL RACE THEORY?
          </Heading>
        </Box>
      </HeroSection>

      <HeaderSection
        imageUrl={'/images/homepage/header/crt.jpeg'}
        header={'CRITICAL RACE THEORY'}
        text={'Critical race theory (CRT) is an academic framework that examines how race and racism are embedded in social, political, and legal systems. It challenges the idea that racism is solely the result of individual prejudice and emphasizes the systemic nature of racial inequality. CRT seeks to deconstruct narratives and power dynamics to work towards racial justice and equity.'}
      />

      <HeroSection backgroundImage={'/images/homepage/header/art.jpeg'} >
        <Flex direction={'column'} align={'left'} justify={'center'} mx={100} px={100} gap={10}>
        <Heading as={'h2'}>
          "The problem is not bad people. The problem is a system that reproduces bad outcomes."
        </Heading>
        <Text fontSize={'2xl'}>
          - Mari Matsuda, University of Hawaii law professor
        </Text>
        </Flex>
      </HeroSection>

      <VocabGrid />

      <HeroSection backgroundImage={'/images/homepage/header/pandemic.jpeg'} />

      <Flex direction={'column'} align={'center'} justify={'center'} pt={10}>
        <Heading as="h2" size="4xl" textTransform={'uppercase'} py={10}>
          FACT OR FICTION?
        </Heading>
        <Flex gap={5} pb={'150px'} justify={'center'} pl={20}>
          <MythSection />
          <Box flex="1" >
            <Image src={'./images/homepage/myth/fake-news.jpeg'} alt="Image" h='100%' w={'80%'} py={10} />
          </Box>
        </Flex>
      </Flex>

      <HeroSection backgroundImage={'/images/homepage/header/hero-section.jpeg'} >
        <Flex direction={'column'} align={'left'} justify={'center'} mx={100} px={100} gap={10}>
        <Heading as={'h2'}>
          "We are a society that has been structured from top to bottom by race. You don't get beyond that by deciding not to talk about it anymore. It will always come back; it will always reassert itself over and over again."
        </Heading>
        <Text fontSize={'2xl'}>
          - Kimberlé Crenshaw, American civil rights advocate and a leading scholar of critical race theory
        </Text>
        </Flex>
      </HeroSection>

    </Box>
  );
}
