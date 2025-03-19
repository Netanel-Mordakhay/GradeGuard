import { Box, Group, Text } from "@mantine/core";
import {
  IconWorldWww,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <Group justify="space-between" align="center" px={20} h="100%" c="dimmed">
      <Box display="flex">
        <Text size="md">GradeGuard.app ©</Text>
        <Text size="md" ml={4} visibleFrom="xs">
          by Netanel Mordakhay
        </Text>
      </Box>
      <Group>
        <IconWorldWww size={24} />
        <IconBrandLinkedin size={24} />
        <IconBrandGithub size={24} />
      </Group>
    </Group>
  );
};

export default Footer;
