import {
  Box,
  Button,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  AddList,
  TeamAdd,
  MatchAdd,
  TeamList,
  GroupList,
  NewsList,
  UserList,
  MatchList,
} from "./index";
import { Link, Link as RouterLink, NavLink } from "react-router-dom";
export const TabMenu = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.50)",
      }}
      py={5}
      px={10}
      w={{ base: "container.sm", lg: "container.lg" }}
      h={"full"}
      m={2}
      roundedTop={"3xl"}
    >
      <Tabs orientation={"horizontal"} isLazy isFitted variant={"soft-rounded"}>
        <TabList alignItems={"flex-start"}>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            <NavLink to={"/admin"}> Create</NavLink>
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
            _activeLink={"/admin/news"}
          >
            <NavLink to={"/admin/news"}>News</NavLink>
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            <NavLink to={"/admin/users"}>User</NavLink>
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            <NavLink to={"/admin/matches"}>Match</NavLink>
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            <Link to={"/admin/teams"}>Team</Link>
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            <NavLink to={"/admin/groups"}>Group</NavLink>
          </Tab>
        </TabList>
        <TabPanels
          roundedTop={"md"}
          mt={2}
          p={2}
          bgColor={"rgba(255, 255, 255, 0.2)"}
        >
          <TabPanel>
            <AddList />
          </TabPanel>
          <TabPanel>
            <NewsList></NewsList>
          </TabPanel>
          <TabPanel>
            <UserList></UserList>
          </TabPanel>
          <TabPanel>
            <MatchList></MatchList>
          </TabPanel>
          <TabPanel>
            <TeamList></TeamList>
          </TabPanel>
          <TabPanel>
            <GroupList></GroupList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
