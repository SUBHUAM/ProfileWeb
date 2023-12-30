"use client";

import React from "react";
import { Grid, Image, GridItem, Heading, Text } from "@chakra-ui/react";
import userPic from "../pics/profilephoto.png";
import { motion } from "framer-motion";



export default function Front() {
  return (
    <Grid
      templateAreas={`"left right"`}
      templateColumns={["1fr", "25% 1fr", "35% 1fr"]}
      gap={12}
      h={["60vh", "60vh", "70vh"]}
      autoFlow={["row", "row", "column"]}
    >
      <GridItem
        area="left"
        justifySelf={["center", "center", "flex-end"]}
        alignSelf="center"
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            borderRadius="full"
            boxSize={["6em", "8em", "12em"]}
            src={userPic.src}
            alt="Subhuam Tangar"
            paddingStart={["5px", "5px", "0px"]}
          />
        </motion.div>
      </GridItem>
      <GridItem
        area="right"
        justifySelf={["center", "center", "flex-start"]}
        alignSelf="center"
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Heading
            size={["xl", "xl", "2xl"]}
            fontFamily={"Poppins ,sans-serif"}
          >
            Backend and Frontend Developer
          </Heading>
          <Text
            paddingY={["2", "2", "4"]}
            fontSize={["md", "md", "xl"]}
            marginTop={["3px", "3px", "25px"]}
          >
            Every line of code tells a story, and Im the storyteller in love.
          </Text>
        </motion.div>
      </GridItem>
    </Grid>
  );
}
