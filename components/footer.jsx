import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box py={10}>
            <Flex
                align={'center'}
                gap={5}
                _before={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('blue.200', 'gray.700'),
                    flexGrow: 1,
                    mr: 8,
                }}
                _after={{
                    content: '""',
                    borderBottom: '1px solid',
                    borderColor: useColorModeValue('blue.200', 'gray.700'),
                    flexGrow: 1,
                    ml: 8,
                }} >
                <Text fontWeight={'bold'}> Elora Hoberecht </Text>
                <Text fontWeight={'bold'}> | </Text>
                <Text fontWeight={'bold'}> INFO 498 </Text>
            </Flex>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                © 2023 Pretend this looks official. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
