import {
  Box,
  TableContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { NewsEdit } from "./NewsEdit";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews, selectAllNews } from "../../reducers/newsSlice";
const imagePath = "https://localhost:7072/images/";

const NewsOption = ({ news }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tr key={news.id}>
      <Td>
        <Box>
          <img alt=" " src={imagePath + news.imageUrl}></img>
        </Box>
      </Td>
      <Td>
        <Text>
          {news.title.length > 50
            ? news.title.substring(0, 50).concat("...")
            : news.title}
        </Text>
      </Td>
      <Td>
        <Text>25.02.2022</Text>
      </Td>
      <Td>
        <Button onClick={onOpen}>
          <Link to={`/admin/editnews/${news.id}`}>Edit</Link>
        </Button>
      </Td>
      <Td>
        <Button>Delete</Button>
      </Td>
    </Tr>
  );
};

export const NewsList = () => {
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
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Edit</Th>
            <Th>Delet</Th>
          </Tr>
        </Thead>
        <Tbody>{content}</Tbody>
      </Table>
    </TableContainer>
  );
};
