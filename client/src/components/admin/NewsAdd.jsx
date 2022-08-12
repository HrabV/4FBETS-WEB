import React, { useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addNewNews } from "../../reducers/newsSlice";
import axios from "axios";
import * as FormData from "form-data";

export const NewsAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newsId, setNewsId] = useState("");
  const [image, setImage] = useState(null);
  const [createdAt, setcreatedAt] = useState();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onImageChanged = (e) => setImage(e.target.files[0]);
  const canSave = [title, body].every(Boolean) && addRequestStatus === "idle";

  const onSaveNews = async () => {
    console.log({ title, body, image, newsId });
    if (canSave) {
      if (image) {
        Upload();
      }
      {
        try {
          setAddRequestStatus("pending");
          await dispatch(
            addNewNews({ title, body, imageUrl: image.name, newsId })
          ).unwrap();
          setTitle("");
          setBody("");
          setNewsId("");
          setImage(null);
        } catch (err) {
          console.error("Failed to save the post: ", err);
        } finally {
          setAddRequestStatus("idle");
        }
      }
    }
  };

  const Upload = async (e) => {
    const image = e.target.files[0].name;
    const formData = new FormData();
    formData.append("image", image);
    await axios
      .post("https://localhost:7072/api/news/upload", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
              <Input
                type={"text"}
                ref={initialRef}
                name="title"
                id="title"
                value={title}
                onChange={onTitleChanged}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Post text</FormLabel>
              <Textarea
                resize={"none"}
                id="newsBody"
                name="newsBody"
                value={body}
                onChange={onBodyChanged}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Post Image</FormLabel>
              <input
                my={"2"}
                px={"1"}
                type={"file"}
                variant="unstyled"
                accept="image/*"
                id="imageUrl"
                name="imageUrl"
                onChange={onImageChanged}
              />
              <Button type={"submit"}>Upload</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type={"submit"}
              onClick={onSaveNews}
              disabled={!canSave}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
