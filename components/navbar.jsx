import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    Button,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    Image,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            align="center"
            justify="space-between"
            p={4}
            bg="white"
            color="black"
        >
            <IconButton
                icon={<HamburgerIcon />}
                variant="unstyled"
                display={{ base: 'block', md: 'none' }}
                onClick={onOpen}
                mr={2}
                fontSize={'3xl'}
            />

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="white" color="black">
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Flex justify="center" my={4}>
                                <Image src="/hands-logo.png" alt="Logo" w={28} h={24} />
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody display="flex" flexDir="column">
                            <VStack spacing={10} flex="1" >
                                <Link href="/">
                                    <Button variant="ghost" fontSize={'xl'} color="purple.500">
                                        What is CRT?
                                    </Button>
                                </Link>
                                <Link href="/technology">
                                    <Button variant="ghost" fontSize={'xl'} color="blue.500">
                                        CRT in Technology
                                    </Button>
                                </Link>
                                <Link href="/resources">
                                    <Button variant="unstyled" fontSize={'xl'} color="red.500">
                                        Resources
                                    </Button>
                                </Link>
                                <Spacer />
                            </VStack>
                            <Box py={10}>
                                <Flex
                                    align={'center'}
                                    _before={{
                                        content: '""',
                                        borderBottom: '1px solid',
                                        borderColor: useColorModeValue('blue.200', 'blue.700'),
                                        flexGrow: 1,
                                        mr: 4,
                                    }}
                                    _after={{
                                        content: '""',
                                        borderBottom: '1px solid',
                                        borderColor: useColorModeValue('blue.200', 'blue.700'),
                                        flexGrow: 1,
                                        ml: 4,
                                    }}>
                                    <Text fontWeight={'bold'}> Elora Hoberecht </Text>
                                </Flex>
                                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                                    © 2023 Pretend this looks official. All rights reserved.
                                </Text>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }}>
                <Flex align="center" >
                    <Image src="/hands-logo.png" alt="Logo" w={14} h={10} mr={2} />
                    <Link href="/">
                        <Button variant="ghost" color="purple.500" mr={4}>
                            What is CRT?
                        </Button>
                    </Link>
                    <Link href="/technology">
                        <Button variant="ghost" color="blue.500" mr={4}>
                            CRT in Tech
                        </Button>
                    </Link>
                    <Link href="/resources">
                        <Button variant="ghost" color="pink.500" mr={4}>
                            Resources
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};