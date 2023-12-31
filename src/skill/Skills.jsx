"use client";
import {
  Box,
  HStack,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  List,
  ListItem,

} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SiSpring } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import {  IoLogoHtml5 } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  

  let languages = ["C++", "Java", "Javascript", "Typescript"];
  let frontEnd = [
    "React JS",
    "Next JS",
    "JavaScript",
    "HTML",
    "CSS",
    "TailWind",
    "ChakraUI",
    "BootStrap",
  ];
  let backEnd = [
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
  ];

  return (
    <div>
      <Container
        position="relative"
        maxW="100%"
        paddingEnd="0px"
        paddingStart="0px"
        h={["1200px", "1200px", "650px"]}
        marginTop="8%"
      >
        <Container maxW="100%" position="absolute" zIndex="10" centerContent>
          <Flex
            direction={["column", "column", "row"]}
            gap={["0", "0", "40px"]}
          >
            <motion.div
              ref={ref}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card
                boxShadow={"lg"}
                h={["auto", "auto", "500px"]}
                w={["100%", "100%", "350px"]}
                mb={["4", "4", "0"]}
                borderRadius="10px"
              >
                <CardHeader>
                  <Flex gap="30px">
                    <Heading size="xl">Languages</Heading>
                    <FaBook size="50px" color="#42E6A4"></FaBook>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {languages &&
                      languages.length > 0 &&
                      languages.map((items, key) => {
                        return (
                          <ListItem key={key} fontSize="xl">
                            <HStack spacing="10px">
                              <Box>
                                <IoMdArrowDropright
                                  size={"25px"}
                                  color="#42E6A4"
                                ></IoMdArrowDropright>
                              </Box>
                              <Box>{items}</Box>
                            </HStack>
                          </ListItem>
                        );
                      })}
                  </List>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              ref={ref}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card
                boxShadow={"lg"}
                h={["auto", "auto", "500px"]}
                w={["100%", "100%", "350px"]}
                mb={["4", "4", "0"]}
                borderRadius="10px"
              >
                <CardHeader>
                  <Flex gap="30px">
                    <Heading size="xl">BackEnd</Heading>
                    <SiSpring size="50px" color="#42E6A4"></SiSpring>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {backEnd &&
                      backEnd.length > 0 &&
                      backEnd.map((items, key) => {
                        return (
                          <ListItem key={key} fontSize="xl">
                            <HStack spacing="10px">
                              <Box>
                                <IoMdArrowDropright
                                  size={"25px"}
                                  color="#42E6A4"
                                ></IoMdArrowDropright>
                              </Box>
                              <Box>{items}</Box>
                            </HStack>
                          </ListItem>
                        );
                      })}
                  </List>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              ref={ref}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card
                boxShadow={"lg"}
                h={["auto", "auto", "500px"]}
                w={["100%", "100%", "350px"]}
                mb={["4", "4", "0"]}
                borderRadius="10px"
              >
                <CardHeader>
                  <Flex gap="30px">
                    <Heading size="xl">FrontEnd</Heading>
                    <IoLogoHtml5 size="50px" color="#42E6A4" />
                  </Flex>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {frontEnd &&
                      frontEnd.length > 0 &&
                      frontEnd.map((items, key) => {
                        return (
                          <ListItem key={key} fontSize="xl">
                            <HStack spacing="10px">
                              <Box>
                                <IoMdArrowDropright
                                  size={"25px"}
                                  color="#42E6A4"
                                ></IoMdArrowDropright>
                              </Box>
                              <Box>{items}</Box>
                            </HStack>
                          </ListItem>
                        );
                      })}
                  </List>
                </CardBody>
              </Card>
            </motion.div>
          </Flex>
        </Container>
        <Container
          maxW="100%"
          bg="#7FB5FF"
          color="white"
          position="absolute"
          zIndex="1"
          h={["auto", "auto", "550px"]}
          marginTop={["4", "4", "100px"]}
        ></Container>
      </Container>
    </div>
  );
}
