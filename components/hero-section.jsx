import { Box, Flex } from '@chakra-ui/react';

export default function HeroSection({ backgroundImage, height = "350px", children }) {
  return (
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height={height}
      position="relative"
    >
      <Box
        position="absolute"
        top={0} left={0} right={0} bottom={0}
        bg="rgba(0,0,0,0.5)"
      />

      <Flex
        align="center"
        justify="center"
        height="100%"
        position="relative"
        flexDirection="column"
        color={'white'}
      >
          {children}
      </Flex>
    </Box>
  );
};