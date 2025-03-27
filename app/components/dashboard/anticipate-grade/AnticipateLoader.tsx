import { Loader, Stack } from "@mantine/core";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AnticipateLoader = () => {
  return (
    <Stack justify="center" align="center" mih={200}>
      <Loader color="blue" type="dots" />
      <Typewriter
        words={[
          "Let our elves do some calculations...",
          "Huh, maybe a bit less?",
          "...or a bit more?",
          "okay, I think we got it.",
          "just one more moment...",
        ]}
        loop={0}
        cursor={false}
        typeSpeed={40}
        deleteSpeed={20}
        delaySpeed={800}
      />
    </Stack>
  );
};

export default AnticipateLoader;
