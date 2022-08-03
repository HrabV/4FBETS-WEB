import {
  Center,
  Container,
  Flex,
  SimpleGrid,
  TableContainer,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Box,
  Image,
  HStack,
  VStack,
  Stack,
} from "@chakra-ui/react";

import { NewsItem } from "./NewsItem";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews, selectAllNews } from "../../reducers/newsSlice";
const imagePath = "https://localhost:7072/images/";

const NewsOption = ({ news }) => {
  return (
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
          <Box key={news.id}>
            <Image
              alt={"ItemNews Image"}
              fit={"cover"}
              align={"center"}
              src={imagePath + news.imageUrl}
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
            <Heading fontSize={"10px"}>{news.title}</Heading>
          </Box>
        </GridItem>
      </Grid>
      <LinkOverlay href="/news/:newsId"></LinkOverlay>
    </LinkBox>
  );
};

export const NewsListItem = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);

  const newsStatus = useSelector((state) => state.news.status);

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);

  let content;

  if (newsStatus === "succeeded") {
    const orderedNews = news
      .slice()
      .sort((a, b) => b.title.localeCompare(a.title));

    content = orderedNews.map((news) => (
      <NewsOption key={news.id} news={news} />
    ));
  }

  return (
    <Stack direction={{ base: "column", lg: "row" }} p="2">
      {content}
    </Stack>
  );
};
