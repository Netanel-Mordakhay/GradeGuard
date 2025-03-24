"use client";
import { Title } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import { rubik } from "../../styles/fonts";
import React from "react";

interface Props {
  small?: boolean;
}

const FeaturesTypewriterTitle = ({ small }: Props) => {
  return (
    <Title ta="center" className={rubik.className} fz={small ? "h3" : "h1"}>
      <Typewriter
        words={[
          "What's Grade",
          "What can I do with Grade",
          "Should I use Grade",
          "Is it free to use Grade",
          "Why use Grade",
          "Can I improve with Grade",
        ]}
        loop={0}
        cursor={false}
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={2000}
      />
      <span className="blue-filled">Guard</span>?
    </Title>
  );
};

export default FeaturesTypewriterTitle;
