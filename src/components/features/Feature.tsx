import React from "react";
import {
  Box,
  chakra,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaEdit, FaSun, FaMobileAlt } from "react-icons/fa";

const Feature = (props: { title: string; children: any; icon: any }) => {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} p={8} rounded="lg">
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize={12}
        mb={4}
        rounded="full"
        color={useColorModeValue("teal.600", "teal.100")}
        bg={useColorModeValue("teal.100", "teal.600")}
      >
        <Icon
          boxSize={5}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          as={props.icon}
        />
      </Flex>
      <chakra.span
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        color={useColorModeValue("gray.900", "inherit")}
        fontSize="xl"
      >
        {props.title}
      </chakra.span>
      <chakra.p fontSize="xl" color={useColorModeValue("gray.500", "gray.400")}>
        {props.children}
      </chakra.p>
    </Box>
  );
};
const Features = () => {
  return (
    <Box as="section" mt="6rem" pt={{ base: "6rem", md: "10rem" }} my={12}>
      <Box bg={useColorModeValue("white", "choc.bg")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h1
              maxW="900px"
              mx="auto"
              fontSize={{
                base: "2rem",
                sm: "3rem",
                lg: "4rem",
              }}
              fontFamily="heading"
              letterSpacing="tight"
              fontWeight="bold"
              mb="16px"
              lineHeight="1.2"
            >
              An experience you'd expect for an amazing bot
            </chakra.h1>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Designed specifically tailored to the best features.{" "}
            </chakra.p>{" "}
          </Box>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
            spacingX={{ base: 16, lg: 10 }}
            spacingY={20}
            mt={12}
            textAlign={["left", "left", "left", "left"]}
            mx="2rem"
          >
            <Feature title="Setup your server" icon={FaEdit}>
              Easily customize your servers player, such as logging certain
              events in the player, or even setting up a channel for requests.
            </Feature>

            <Feature title="Interactive Features" icon={FaSun}>
              Most of our commands include interactivity, including the use of
              Components like buttons and select menus, to make your experience
              easier. choice.
            </Feature>
            <Feature title="Amazing quality" icon={FaMobileAlt}>
              Our quality of music is incredibly smooth with no hiccups, all
              audio can be filtered, too!
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
