import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  list,
  SimpleGrid,
  Stack,
  TableContainer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { NewsItem } from "./NewsItem";

export const NewsListItem = () => {
  const test = new Array(<NewsItem />, <NewsItem />, <NewsItem />);
  const elements = test.map((item) => {
    return item;
  });
  return (
    <Stack>
      <HStack>
        <Box>{elements}</Box>
      </HStack>
    </Stack>
  );
};
