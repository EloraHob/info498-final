import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

function HeaderSection({ header, text, imageUrl, flipColumns }) {
    const leftColumnOrder = flipColumns ? 2 : 1;
    const rightColumnOrder = flipColumns ? 1 : 2;

    return (
        <Flex
            p="4"
            justify="space-between"
            mx="10"
            py={20}
            flexDirection={{ base: "column", lg: "row" }}
        >
            {/* Left Column */}
            <Box 
                flex="1" 
                textAlign={flipColumns ? "left" : "right"} 
                order={leftColumnOrder}
                ml={flipColumns ? "10" : "0"}
            >
                <Heading
                    as={'h2'}
                    fontWeight="bold"
                    fontSize={{ base: "24px", lg: "42px" }}
                >
                    {header}
                </Heading>

                {/* Divider */}
                <Box
                    display="inline-block"
                    w="40%" h="3px"
                    bg="#FF6F00"
                    borderRadius={'full'}
                    my="5"
                />

                <Text
                    fontSize={{ base: "16px", lg: "24px" }}
                    pl={flipColumns ? 0 : 10}
                    pr={flipColumns ? 10 : 0}
                >
                    {text}
                </Text>
            </Box>

            {/* Right Column */}
            <Box flex="1" ml={flipColumns ? "0" : "10"} order={rightColumnOrder}>
                <Image src={imageUrl} alt="Image" w="100%" />
            </Box>
        </Flex>
    );
}

export default HeaderSection;
