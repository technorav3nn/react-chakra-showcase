import { Box, Button, chakra, Flex, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Heros() {
    return (
        <>
            <Box pos="relative" overflow="hidden">
                <Box maxW="7xl" mx="auto">
                    <Box
                        pos="relative"
                        pb={{ base: 16, sm: 16, md: 20, lg: 28, xl: 32 }}
                        w="full"
                        border="solid 1px transparent"
                    >
                        <Box
                            //mt={{ base: 10 }}
                            mx="auto"
                            maxW={{ base: "7xl" }}
                            px={{ base: 4, sm: 6, lg: 8 }}
                            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
                        >
                            <Box
                                textAlign="center"
                                w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                                mx="auto"
                            >
                                <chakra.h1
                                    fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
                                    letterSpacing="tight"
                                    lineHeight="short"
                                    fontWeight={600}
                                    color={useColorModeValue("gray.900", "white")}
                                >
                                    <chakra.span display={{ base: "block", xl: "inline" }}>
                                        Listen to your music
                                        <br />
                                    </chakra.span>
                                    <chakra.span
                                        display={{ base: "block", xl: "inline" }}
                                        color={useColorModeValue("brand.600", "brand.400")}
                                    >
                                        <u style={{ color: "#38b2ac" }}>with a passion.</u>
                                    </chakra.span>
                                </chakra.h1>
                                <chakra.p
                                    mt={{ base: 3, sm: 5, md: 5 }}
                                    mx={{ sm: "auto", lg: 0 }}
                                    mb={6}
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="gray.500"
                                    lineHeight="base"
                                >
                                    Ever wanted a secure, easy to use, and fast music bot? You'll
                                    want to use Floppa Tunes. <br />
                                    Scroll down just to see some of the amazing features.
                                </chakra.p>
                                <Stack
                                    direction={{ base: "column", sm: "column", md: "row" }}
                                    mb={{ base: 4, md: 8 }}
                                    spacing={{ base: 4, md: 2 }}
                                    justifyContent="center"
                                >
                                    <Stack
                                        direction={"column"}
                                        spacing={3}
                                        align={"center"}
                                        alignSelf={"center"}
                                        position={"relative"}
                                    >
                                        <Button
                                            colorScheme={"teal"}
                                            bg={"teal.300"}
                                            rounded={"full"}
                                            px={6}
                                            _hover={{
                                                bg: "teal.500",
                                            }}
                                        >
                                            Invite now
                                        </Button>
                                        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                                            Read the docs
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
