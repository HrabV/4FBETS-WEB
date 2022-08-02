import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuDivider,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NavLink } from ".";
import { Link as ReachLink } from "react-router";
import { Logo } from "../logo/index";

export const Nav = () => {
  const isAdmin = true;
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.50)",
          }}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingX={"5"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Logo />

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/news"}>News</NavLink>
              {isAdmin ? (
                <NavLink to={"/admin"}>Admin</NavLink>
              ) : (
                <NavLink to={"/profile"}>Profile</NavLink>
              )}
              <NavLink to={"/login"}>Sign in</NavLink>
              <NavLink to={"/registration"}>Sign up</NavLink>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  id="avatar"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGkaCb5JqWo6oMYOof4L1u7gcfAEMpJU42fimt5PFdzYMZfU6CZSSvhAzkU0NRL_YZVI&usqp=CAU"
                  }
                />
              </MenuButton>
              <MenuList
                backgroundColor={"rgba(255, 255, 255, 0.50)"}
                boxShadow={"base"}
                color={"white"}
              >
                <MenuItem
                  _hover={{ bg: "blackAlpha.100", textDecoration: "none" }}
                >
                  <Link href="/login">Sign in</Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "blackAlpha.200" }}>
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem _hover={{ bg: "blackAlpha.300" }}>
                  {isAdmin ? (
                    <Link href="/admin">Admin</Link>
                  ) : (
                    <Link href="/profile">Profile</Link>
                  )}
                </MenuItem>
                <MenuDivider></MenuDivider>
                <MenuItem _hover={{ bg: "blackAlpha.400" }}>
                  <Link>Logout</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            backgroundColor={"rgba(255, 255, 255, 0.50)"}
            pb={4}
            display={{ md: "none" }}
          >
            <Stack pl={2} color={"white"} as={"nav"} spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/news">News</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/registration">Sign up</Link>
              {isAdmin ? (
                <Link href="/admin">Admin</Link>
              ) : (
                <Link href="/profile">Profile</Link>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
