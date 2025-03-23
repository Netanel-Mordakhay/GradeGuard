"use client";
import React from "react";
import {
  IconBookUpload,
  IconCubePlus,
  IconFileTextSpark,
  IconClock,
  IconBed,
  IconStar,
  IconDownload,
  IconMoodEdit,
  IconBrandFacebook,
} from "@tabler/icons-react";
import {
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "../../styles/QuickActions.module.css";
import DefaultCard from "../global/DefaultCard";
import { motion } from "framer-motion";

const mockdata = [
  { title: "New course", icon: IconBookUpload, color: "violet" },
  { title: "New to-do", icon: IconCubePlus, color: "indigo" },
  { title: "New exam", icon: IconFileTextSpark, color: "orange" },
  { title: "Study session", icon: IconClock, color: "green" },
  { title: "Let me rest a bit", icon: IconBed, color: "teal" },
  { title: "Anticipate my grade", icon: IconStar, color: "cyan" },
  { title: "Export my grades", icon: IconDownload, color: "pink" },
  { title: "Edit profile", icon: IconMoodEdit, color: "red" },
  { title: "Follow on Facebook", icon: IconBrandFacebook, color: "blue" },
];

const QuickActionsBox = () => {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.item}
    >
      <UnstyledButton key={item.title} ta="center">
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs">{item.title}</Text>
      </UnstyledButton>
    </motion.div>
  ));

  return (
    <DefaultCard title="Quick Actions">
      <SimpleGrid cols={3}>{items}</SimpleGrid>
    </DefaultCard>
  );
};

export default QuickActionsBox;
