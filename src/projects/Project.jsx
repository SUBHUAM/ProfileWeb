"use client";
import {
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Spotify from "../pics/music.png";
import Keeper from "../pics/keeper.png";
import SignUp from "../pics/signUp.jpg";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Project() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Container maxWidth="90%" marginBottom="13%">
      <Divider marginTop={"8%"}></Divider>

      <Flex direction="column" align="center" marginTop="8%">
        <Heading size={["xl", "xl", "2xl"]}>Personal Projects</Heading>
      </Flex>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(370px, 1fr))"
        marginTop="12%"
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
          <Card h="300px" className="hover-card" borderRadius={"15px"}>
            <Image
              alt="spotify"
              src={Spotify.src}
              objectFit="cover"
              height="100%"
              width="100%"
            />
            <div className="hover-text">
              <Heading
                className="hover-heading"
                textColor={"white"}
                paddingBottom={"20px"}
              >
                Music App
              </Heading>
              <Text
                className="truncate-text"
                textColor={"white"}
                width="100%"
                fontSize="md"
              >
                Implemented a Music app with OAuth authorization for Spotify
                API, fetching and displaying playlists for seamless song and
                playback controls.
              </Text>
              <Text
                className="read-more"
                textColor={"#3498db"}
                cursor="pointer"
                marginTop="5px"
                display="inline"
              >
                Read more
              </Text>
            </div>
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
          <Card h="300px" className="hover-card" borderRadius={"15px"}>
            <Image
              alt="spotify"
              src={SignUp.src}
              objectFit="cover"
              height="100%"
              width="100%"
            />
            <div className="hover-text">
              <Heading
                className="hover-heading"
                textColor={"white"}
                paddingBottom={"20px"}
              >
                Sign-Up
              </Heading>
              <Text
                className="truncate-text"
                textColor={"white"}
                width="100%"
                fontSize="md"
              >
                Implemented secure user authentication and authorization with
                token-based security using Spring Security. User credentials,
                encrypted with bcrypt, are securely stored in an SQL database
                for streamlined login and signup.
              </Text>
              <Text
                className="read-more"
                textColor={"#3498db"}
                cursor="pointer"
                marginTop="5px"
                display="inline"
              >
                Read more
              </Text>
            </div>
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
          <Card h="300px" className="hover-card" borderRadius={"15px"}>
            <Image
              alt="spotify"
              src={Keeper.src}
              objectFit="cover"
              height="100%"
              width="100%"
            />
            <div className="hover-text">
              <Heading
                className="hover-heading"
                textColor={"white"}
                paddingBottom={"20px"}
              >
                Keeper App
              </Heading>
              <Text
                className="truncate-text"
                textColor={"white"}
                width="100%"
                fontSize="md"
              >
                This is a basic Google Keep clone designed for note‑taking with
                real‑time creation and deletion functionality.
              </Text>
              <Text
                className="read-more"
                textColor={"#3498db"}
                cursor="pointer"
                marginTop="5px"
                display="inline"
              >
                Read more
              </Text>
            </div>
          </Card>
        </motion.div>
      </SimpleGrid>
    </Container>
  );
}
