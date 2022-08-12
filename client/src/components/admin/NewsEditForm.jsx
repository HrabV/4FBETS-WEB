import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Container,
  Stack,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";
import { MainLayout } from "../../layouts";

export const NewsEditForm = () => {
  return (
    <MainLayout>
      <Container maxWidth={"6xl"}>
        <Box backgroundColor={"rgba(255,255,255, 0.7)"} padding={5}>
          <Stack>
            <FormControl>
              <FormLabel>Post header</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Post text</FormLabel>
              <Textarea resize={"vertical"} />
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
              />
              <Button type={"submit"}>Upload</Button>
            </FormControl>
            <Button type={"submit"} colorScheme="blue" mr={3}>
              Save
            </Button>
          </Stack>
        </Box>
      </Container>
    </MainLayout>
  );
};
