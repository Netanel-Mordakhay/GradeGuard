import React from "react";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import {
  IconSquareCheckFilled,
  IconListDetails,
  IconAlarm,
  IconTrophy,
} from "@tabler/icons-react";
import classes from "../../styles/TopStatistics.module.css";
import { TodoWithCourse } from "@/app/validationSchemas";

const icons = [IconSquareCheckFilled, IconListDetails, IconAlarm, IconTrophy];

interface Props {
  upcomingExam?: TodoWithCourse | null;
  upcomingTodo?: TodoWithCourse | null;
}

const TopStatistics = ({ upcomingExam, upcomingTodo }: Props) => {
  const data = [
    {
      title: "My next exam",
      value: upcomingExam?.course ? upcomingExam?.course?.title : "-",
      desc: upcomingExam?.dueDate
        ? new Date(upcomingExam.dueDate).toLocaleDateString()
        : "No date",
    },
    {
      title: "My Next Assignment",
      value: upcomingTodo?.course ? upcomingTodo?.course?.title : "-",
      desc: upcomingTodo?.dueDate
        ? new Date(upcomingTodo.dueDate).toLocaleDateString()
        : "No date",
    },
    {
      title: "Study Clock Record",
      value: "N/A",
      desc: "not yet implemented",
    },
    {
      title: "My Trivia",
      value: "N/A",
      desc: "not yet implemented",
    },
  ];
  const stats = data.map((stat, index) => {
    const Icon = icons[index];

    return (
      <Paper
        withBorder
        p="md"
        radius="md"
        key={stat.title}
        className={`${classes.statisticsContainer} ${classes.statisticsText}`}
      >
        <Group justify="space-between">
          <Text size="xs">{stat.title}</Text>
          <Icon className={classes.statisticsIcon} size="1.4rem" />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text fw={700}>{stat.value}</Text>
        </Group>

        <Text fz="xs" mt={7}>
          {stat.desc}
        </Text>
      </Paper>
    );
  });
  return (
    <div>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
};

export default TopStatistics;
