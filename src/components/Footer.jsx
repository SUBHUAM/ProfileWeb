import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa6";

export default function Footer() {
  
  let date = new Date();

  return (
    <>
      <Container centerContent maxW={"100%"} position="absolute">
        <Card align="center" width={["auto", "auto", "40%"]} boxShadow={"lg"}>
          <CardHeader paddingBottom={"10px"}>
            <Heading size="xl">Begin a project</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Are you open to collaboration? Lets schedule a moment to connect.
            </Text>
          </CardBody>
          <CardFooter paddingTop={"15px"} paddingBottom={"50px"}>
            <a href="mailto:subhuamtangar@gmail.com">
              <Button
                boxShadow={"md"}
                _hover={{
                  bg: "blue.500",
                  color: "white",
                }}
                colorScheme="blue"
                variant="outline"
                leftIcon={<FaHandshake size="25px" />}
              >
                Connect
              </Button>
            </a>
          </CardFooter>
        </Card>
      </Container>
      <Box
        as="footer"
        p="4"
        color="white"
        height={["auto", "auto", "500px"]}
        textAlign="center"
        marginTop="18%"
        bg={"#141C3A"}
        padding={"150px"}
      >
        <Container
          centerContent
          maxW={"100%"}
          marginTop={["150px", "150px", "100px"]}
        >
          <AvatarGroup spacing="1rem">
            <Stack direction="row" spacing={"15px"}>
              <a
                href="https://www.linkedin.com/in/subhuam-tangar-3934871aa/"
                target="_blank"
              >
                {" "}
                <Avatar
                  _hover={{
                    bg: "white",
                    color: "teal.500",
                  }}
                  bg="teal.500"
                  icon={<ImLinkedin2 />}
                />
              </a>
              <a href="mailto:subhuamtangar@gmail.com">
                <Avatar
                  bg="teal.500"
                  _hover={{
                    bg: "white",
                    color: "teal.500",
                  }}
                  icon={<IoMdMail />}
                />
              </a>
            </Stack>
          </AvatarGroup>
          <Text marginTop={"3rem"}>
            Living with purpose, learning with curiosity, and leveling up with
            determination
          </Text>
        </Container>
        <Text marginTop="4rem">
          {" "}
          © {date.getFullYear()} Subhuam Tangar, All rights reserved.
        </Text>
      </Box>
    </>
  );
}
