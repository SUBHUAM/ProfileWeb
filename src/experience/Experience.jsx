import { Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PureSoftware from "../pics/puresoftware.jpg";

export default function Experience() {

  return (
    <Container maxW="79%" centerContent>
      <Heading size={["xl", "xl", "2xl"]} marginTop="12%">
        Experience
      </Heading>
      <Text
        paddingY={["2", "2", "4"]}
        fontSize={["md", "md", "xl"]}
        marginTop="7%"
      >
        I have served as a software engineer at Puresoftware, where my
        responsibilities spanned a diverse range of projects. I specialized in
        the development of microservices, intricate authentication and
        authorization systems, and the seamless management of databases.
        Additionally, I contributed significantly to the enhancement and
        restructuring of frontend code.
      </Text>
      <Image
        marginTop="8%"
        h={["100px", "100px", "150px"]}
        src={PureSoftware&&PureSoftware.src}
        alt="PureSoftware"
      ></Image>
    </Container>
  );
}
