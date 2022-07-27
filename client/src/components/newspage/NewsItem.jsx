import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Box,
  Image,
  HStack,
  VStack,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ListGroup } from "reactstrap";
export const NewsItem = () => {
  return (
    <Box p="2">
      <LinkBox
        bgColor={"white"}
        boxShadow={"base"}
        _hover={{ boxShadow: "dark-lg" }}
        ml={5}
        as="article"
        p="5"
        borderWidth="1px"
        rounded="md"
        width={"150px"}
        height={"250px"}
      >
        <Grid gridTemplateRows={"50% 20% 1fr"}>
          <GridItem>
            <Box>
              <Image
                alt={"ItemNews Image"}
                fit={"cover"}
                align={"center"}
                src={
                  "https://alpes-holidays.com/wp-content/uploads/2022/06/Argentina-vs-Estonia-Football-Match-Report-June-5.jpg"
                }
              ></Image>
            </Box>
          </GridItem>
          <GridItem>
            <Box p="2">
              <Text fontSize={"10px"}>2022-03-07</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Heading fontSize={"10px"}>
                Gabriel Jesus: Manchester City and Brazil forward having medical
                at Arsenal before £45m move
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        <LinkOverlay href="#"></LinkOverlay>
      </LinkBox>
    </Box>
  );
};
