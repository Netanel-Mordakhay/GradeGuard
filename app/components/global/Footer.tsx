import { Box, Group, Text } from "@mantine/core";
import {
  IconWorldWww,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import PersonalLinks from "./PersonalLinks";

const Footer = () => {
  return (
    <Group justify="space-between" align="center" px={20} h="100%" c="dimmed">
      <Box display="flex">
        <Text className="text-label-xs">GradeGuard.app ©</Text>
        <Text ml={2} visibleFrom="xs" className="text-label-xs">
          by Netanel Mordakhay
        </Text>
      </Box>
      <PersonalLinks />
    </Group>
  );
};

export default Footer;
