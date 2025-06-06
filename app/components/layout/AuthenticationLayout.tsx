import React, { ReactNode } from "react";
import { Box, Grid, GridCol, Group, Stack } from "@mantine/core";
import classes from "../../styles/Login.module.css";

interface Props {
  children: ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Group
      mx="auto"
      align="center"
      justify="center"
      wrap="nowrap"
      maw={1000}
      gap={50}
      mih={{ base: "100%", lg: "70svh" }}
      className="overlay-gradient"
    >
      {left}
      <Box visibleFrom="lg">{right}</Box>
    </Group>
  );
};

export default AuthenticationLayout;
