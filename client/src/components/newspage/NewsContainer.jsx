import { Box, Heading, Stack, Image, Text, Container } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { MainLayout } from "../../layouts";
import {
  selectNewsById,
  fetchNews,
  fetchNewsById,
} from "../../reducers/newsSlice";
const imagePath = "https://localhost:7072/images";

export const NewsContainer = () => {
  const dispatch = useDispatch();
  const { newsId } = useParams();
  const { state } = useLocation();
  const [news, setNews] = useState({ ...state?.news });

  useEffect(() => {
    if (!state) {
      dispatch(fetchNewsById(newsId)).then((response) => {
        setNews(response.payload);
      });
    }
  }, [newsId, state]);

  return (
    <MainLayout>
      <Container maxWidth={"7xl"} backgroundColor={"rgba(255,255,255, 0.7)"}>
        <Box padding={5}>
          <Stack>
            <Box>
              <Heading>{news.title}</Heading>
            </Box>
            <Box>
              {news.imageUrl && (
                <img src={`${imagePath}/${news.imageUrl}`}></img>
              )}
            </Box>
            <Box>
              <Text>{news.body}</Text>
            </Box>
          </Stack>
        </Box>
      </Container>
    </MainLayout>
  );
};
