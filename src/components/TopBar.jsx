import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

export default function TopBar() {
  return (
    <Container maxWidth="90%" marginTop="20px">
      <Flex>
        <Heading>Subhuam</Heading>
        <Heading marginStart="6px" textColor={"#47B5FF"}>
          Tangar
        </Heading>
        <Spacer />
        <a href="mailto:subhuamtangar@gmail.com">
          <Button
            variant="outline"
            colorScheme="blue"
            _hover={{
              bg: "blue.500",
              color: "white",
            }}
          >
            Connect
          </Button>
        </a>
      </Flex>
      <Divider marginTop="6px" orientation="horizontal" />
    </Container>
  );
}
