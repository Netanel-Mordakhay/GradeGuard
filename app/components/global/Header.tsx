import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Grid, Group, Text } from "@mantine/core";
import Logo from "./Logo";
import Link from "next/link";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Group h="100%" px="md" justify="space-between" dir="ltr">
      <Group>
        {children}
        <Logo />
      </Group>
      <Group>
        <ThemeToggle />
      </Group>
    </Group>
  );
};

export default Header;
