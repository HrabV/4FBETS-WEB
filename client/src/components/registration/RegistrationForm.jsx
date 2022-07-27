import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Image,
  Grid,
  GridItem,
  Container,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxW={"7xl"}>
      <Stack
        minH={"max-content"}
        padding={2}
        direction={{ base: "column", md: "row" }}
      >
        <Grid gridTemplateColumns={"repeat(2, 1fr)"}>
          <GridItem>
            <Flex p={2} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={1}>
                <Stack mb={2} align={"center"}>
                  <Heading
                    color={"blackAlpha.700"}
                    fontSize={"xl"}
                    textAlign={"center"}
                  >
                    Sign up
                  </Heading>
                </Stack>
                <Box
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.50)",
                  }}
                  rounded={0}
                  boxShadow={"lg"}
                  p={4}
                  color={"blackAlpha.700"}
                >
                  <Stack spacing={1}>
                    <VStack>
                      <FormControl id="nickname" isRequired>
                        <FormLabel>Nickname</FormLabel>
                        <Input
                          borderColor={"blackAlpha.300"}
                          type="text"
                          bgColor={"whiteAlpha.500"}
                        />
                      </FormControl>
                    </VStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        borderColor={"blackAlpha.300"}
                        type="email"
                        bgColor={"whiteAlpha.500"}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          borderColor={"blackAlpha.300"}
                          bgColor={"whiteAlpha.500"}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"green.500"}
                        color={"white"}
                        _hover={{
                          bg: "green.700",
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                    <Stack pt={2}>
                      <Text align={"center"}>
                        Already a user?{" "}
                        <Link color={"green.400"} href={"/login"}>
                          Sign in
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flex={1}>
              <Box p={2} rounded={"3xl"} bgColor={"white"}>
                <Image
                  alt={"Registration Image"}
                  objectFit={"cover"}
                  rounded={"3xl"}
                  src={
                    "https://i.la-croix.com/1400x933/smart/2019/07/05/1201033571/football-feminin-quinstitution-produire-autre-systeme-valeurs-Non-puisque-largent-entre-danse_0.jpg"
                  }
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};
