"use client";

import {
  Card,
  CardBody,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Container
      maxW={"80%"}
      centerContent
      textAlign={"center"}
      alignSelf={"center"}
    >
      <Card height={"400px"} boxShadow={"md"} marginTop={"6%"}>
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
          <CardBody>
            <Heading>Hello I am Subhuam,</Heading>
            <Text marginTop={"7%"} fontSize={["md", "md", "xl"]}>
              Keen to embrace challenges, whether they unfold on paper or
              materialize in the real world, my unwavering aspiration is to
              achieve a pinnacle of excellence in my chosen field. With a blend
              of creativity and technical prowess, I am ready to take on the
              challenge of transforming ideas into tangible solutions,
              contributing to the collective vision of the team and the
              organization at large.
            </Text>
          </CardBody>
        </motion.div>
      </Card>
    </Container>
  );
}
