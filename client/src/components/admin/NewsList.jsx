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
} from "@chakra-ui/react";
import React from "react";
import { NewsEdit } from "./NewsEdit";

export const NewsList = () => {
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
        <Tbody>
          <Tr>
            <Td>
              <Box width={"150px"} height={"50px"}></Box>
            </Td>
            <Td>
              <Text>Vorskla</Text>
            </Td>
            <Td>
              <Text>25.02.2022</Text>
            </Td>
            <Td>
              <NewsEdit></NewsEdit>
            </Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
