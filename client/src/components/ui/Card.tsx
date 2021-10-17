import React from "react";
import {
  Box,
  Flex,
  Text,
  Badge,
  Button,
  Spacer,
  Stack,
  useColorModeValue,
  chakra,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";

const Ma = ({
  title,
  description,
  image,
  buttonLink,
  ...extra
}: {
  title: string;
  description: string;
  image: string;
  buttonLink: string;
}) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        mx="auto"
        py={6}
      >
        <Center>
          <Image
            p={[4, 4, 2, 2]}
            h={56}
            fit="cover"
            src={image}
            alt="avatar"
            style={{ borderRadius: "20px" }}
            align={"center"}
            mx="auto"
          />
        </Center>

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {title}
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {description}
          </chakra.span>
        </Box>
        <Center>
          <Flex>
            <Spacer />
            <Button
              variant="solid"
              as="a"
              style={{ textDecoration: "none" }}
              colorScheme="teal"
              size="md"
              href={buttonLink}
              bg="teal.300"
              _hover={{ backgroundColor: "teal.400", cursor: "pointer" }}
            >
              View
            </Button>
          </Flex>
        </Center>
      </Box>
    </Flex>
  );
};

export default Ma;
