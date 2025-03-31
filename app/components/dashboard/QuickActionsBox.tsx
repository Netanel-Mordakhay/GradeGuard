"use client";
import React from "react";
import {
  IconBookUpload,
  IconCubePlus,
  IconFileTextSpark,
  IconClock,
  IconBed,
  IconStar,
  IconBookDownload,
  IconFileDownload,
  IconMessageChatbot,
} from "@tabler/icons-react";
import {
  Modal,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "../../styles/QuickActions.module.css";
import DefaultCard from "../global/DefaultCard";
import { handleExportGrades } from "@/lib/quickActions";
import { motion } from "framer-motion";
import AnticipateGradeModal from "./anticipate-grade/AnticipateGradeModal";
import { useDisclosure } from "@mantine/hooks";
import CourseFormComponent from "../courses/CourseForm";
import TodoForm from "../todos/TodoForm";
import { getUserCourses } from "@/lib/getUserCourses";

const QuickActionsBox = () => {
  const theme = useMantineTheme();
  const [
    openedAnticipated,
    { open: openAnticipated, close: closeAnticipated },
  ] = useDisclosure(false);
  const [openedNewCourse, { open: openNewCourse, close: closeNewCourse }] =
    useDisclosure(false);

  const mockdata = [
    {
      title: "New course",
      icon: IconBookUpload,
      color: "violet",
      onClick: openNewCourse,
    },
    { title: "New to-do", icon: IconCubePlus, color: "indigo" },
    { title: "New exam", icon: IconFileTextSpark, color: "orange" },
    { title: "Study session", icon: IconClock, color: "green" },
    { title: "Let me rest a bit", icon: IconBed, color: "teal" },
    {
      title: "Anticipate my grade",
      icon: IconStar,
      color: "cyan",
      onClick: openAnticipated,
    },
    {
      title: "Export courses",
      icon: IconBookDownload,
      color: "pink",
      onClick: handleExportGrades,
    },
    { title: "Export assignments", icon: IconFileDownload, color: "red" },
    { title: "AI Assistant", icon: IconMessageChatbot, color: "blue" },
  ];

  const items = mockdata.map((item) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.item}
      key={item.title}
    >
      <UnstyledButton ta="center" onClick={item.onClick}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs">{item.title}</Text>
      </UnstyledButton>
    </motion.div>
  ));

  return (
    <>
      <DefaultCard title="Quick Actions">
        <SimpleGrid cols={3}>{items}</SimpleGrid>
      </DefaultCard>

      <AnticipateGradeModal
        opened={openedAnticipated}
        onClose={closeAnticipated}
      />

      <Modal opened={openedNewCourse} onClose={closeNewCourse}>
        <CourseFormComponent />
      </Modal>
    </>
  );
};

export default QuickActionsBox;
