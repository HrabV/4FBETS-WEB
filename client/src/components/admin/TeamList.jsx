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
} from "@chakra-ui/react";
import React from "react";

export const TeamList = () => {
  return (
    <TableContainer>
      <Table colorScheme={"gray"}>
        <Thead textAlign={"center"}>
          <Tr>
            <Th>Team name</Th>
            <Th>Team logo</Th>
            <Th>Edit</Th>
            <Th>Delet</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <h1>Vorskla</h1>
            </Td>
            <Td>
              <h1>Vorskla</h1>
            </Td>
            <Td>
              <Button>Edit</Button>
            </Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <h1>Vorskla</h1>
            </Td>
            <Td>
              <h1>Vorskla</h1>
            </Td>
            <Td>
              <Button>Edit</Button>
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
