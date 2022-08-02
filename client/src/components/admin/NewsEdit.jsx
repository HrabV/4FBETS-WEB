import React, { useRef } from "react";
import {
  Box,
  Grid,
  GridItem,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  Button,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  FormControl,
  ModalFooter,
  Input,
  ModalCloseButton,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const NewsEdit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        backdropFilter="blur(20px)"
        size={"lg"}
        scrollBehavior="outside"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent rounded={0} bgColor={"rgba(255, 255, 255, 0.75)"}>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Post header</FormLabel>
              <Textarea ref={initialRef} />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Post text</FormLabel>
              <Textarea resize={"vertical"} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Post Image</FormLabel>
              <Input
                px={"1"}
                variant="unstyled"
                type={"file"}
                accept="image/*"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save changes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
