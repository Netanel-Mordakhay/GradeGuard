"use client";
import React from "react";
import {
  IconBookUpload,
  IconCubePlus,
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
import { handleExportGrades, handleExportTodos } from "@/lib/quickActions";
import { motion } from "framer-motion";
import AnticipateGradeModal from "./anticipate-grade/AnticipateGradeModal";
import { useDisclosure } from "@mantine/hooks";
import CourseFormComponent from "../courses/CourseForm";
import TodoForm from "../todos/TodoForm";
import { Course } from "@/app/validationSchemas";

interface Props {
  courses: Course[];
}

const QuickActionsBox = ({ courses }: Props) => {
  const theme = useMantineTheme();
  // Anticipated grade
  const [
    openedAnticipated,
    { open: openAnticipated, close: closeAnticipated },
  ] = useDisclosure(false);
  // New Course
  const [openedNewCourse, { open: openNewCourse, close: closeNewCourse }] =
    useDisclosure(false);
  // New Todo
  const [openedNewTodo, { open: openNewTodo, close: closeNewTodo }] =
    useDisclosure(false);
  // AI Assistant
  const [openedAI, { open: openAI, close: closeAI }] = useDisclosure(false);

  const mockdata = [
    {
      title: "New course",
      icon: IconBookUpload,
      color: "violet",
      onClick: openNewCourse,
    },
    {
      title: "New to-do",
      icon: IconCubePlus,
      color: "orange",
      onClick: openNewTodo,
    },

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
    {
      title: "Export assignments",
      icon: IconFileDownload,
      color: "red",
      onClick: handleExportTodos,
    },
    {
      title: "AI Assistant",
      icon: IconMessageChatbot,
      color: "blue",
      onClick: openAI,
    },
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
      {/* Anticipate grade */}
      <AnticipateGradeModal
        opened={openedAnticipated}
        onClose={closeAnticipated}
      />
      {/* New course */}
      <Modal opened={openedNewCourse} onClose={closeNewCourse}>
        <CourseFormComponent />
      </Modal>
      {/* New Todo */}
      <Modal opened={openedNewTodo} onClose={closeNewTodo}>
        <TodoForm courses={courses} />
      </Modal>
      {/* AI Assistant */}
      <Modal opened={openedAI} onClose={closeAI}>
        <Text>Give me some time, it's on the way!</Text>
      </Modal>
    </>
  );
};

export default QuickActionsBox;
