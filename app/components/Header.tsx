import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Group, Text } from "@mantine/core";
import LogoSmall from "./LogoSmall";

const Header = () => {
  return (
    <Group justify="center" align="center">
      <LogoSmall />
      <Text>GradeGuard</Text>
      <ThemeToggle />
    </Group>
  );
};

export default Header;
