import { Center, Loader } from "@mantine/core";
import React from "react";

const LoaderLayout = () => {
  return (
    <Center h="60svh">
      <Loader color="blue" size="lg" />
    </Center>
  );
};

export default LoaderLayout;
