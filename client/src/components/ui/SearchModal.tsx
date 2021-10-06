import React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Grid,
  theme,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  chakra,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setsearch] = React.useState("");
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={25}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="brand.400" boxSize={5} mr={5} />}
              />
              <Input
                variant="flushed"
                placeholder="Search the collection..."
                size="lg"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <InputRightElement>
                <Kbd
                  color="gray.500"
                  rounded="2px"
                  cursor="pointer"
                  onClick={onClose}
                >
                  <chakra.div
                    as="abbr"
                    title={"Close search"}
                    textDecoration="none !important"
                  >
                    esc
                  </chakra.div>
                </Kbd>
              </InputRightElement>
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
