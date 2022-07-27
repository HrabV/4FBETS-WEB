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
export const NewsAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <>
      <Box
        width={"150px"}
        height={"250px"}
        rounded={"10%"}
        boxShadow={"5px 5px 10px gray"}
        bg={"blackAlpha.100"}
        _hover={{ boxShadow: "10px 10px 10px gray" }}
      >
        <Grid
          w={"full"}
          h={"full"}
          p={2}
          align={"center"}
          gridTemplateRows={"20% 1fr max-content "}
        >
          <GridItem alignSelf={"center"} p={2}>
            <Heading size={"sm"}> Add New Post </Heading>
          </GridItem>
          <GridItem
            rounded={"50%"}
            p={"2"}
            m={"2"}
            bgColor={"white"}
            boxShadow={"1px 1px 10px gray"}
          >
            <Image
              rounded={"50%"}
              height={"full"}
              width={"full"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1RXypIY-h7VsxjMWDbCZrcBtQJg7Jb7z0VV27bujmqAoqsWsvKafyhuZpJkZqDtvVyE&usqp=CAU"
            />
          </GridItem>
          <GridItem m={2} rounded={"20%"}>
            {" "}
            <Button w={"70%"} h={"full"} onClick={onOpen} p={2} fontSize={15}>
              Add
            </Button>
          </GridItem>
        </Grid>
      </Box>
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
          <ModalHeader>Add new Post</ModalHeader>
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
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
