"use client";
import React from "react";
import { Container, Image, Divider } from "@chakra-ui/react";
import ComputerImage from "../pics/computerPic.png";
import { motion } from "framer-motion";

export default function Computer() {
  return (
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
      <Container
        marginBottom={["10px", "15px", "20px"]}
        centerContent
        maxW={["45%", "45%", "35%"]}
      >
        <Image
          htmlHeight={["auto", "auto", "350px"]}
          htmlWidth={["100%", "100%", "400px"]}
          src={ComputerImage.src}
          alt="ComputerPic"
        />
        <Divider orientation="horizontal" />
      </Container>
    </motion.div>
  );
}
