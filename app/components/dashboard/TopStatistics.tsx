import React from "react";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import classes from "../../styles/TopStatistics.module.css";

const icons = {
  user: IconUser,
  discount: IconUser,
  receipt: IconUser,
  coin: IconUser,
  exam: IconUser,
  assignment: IconUser,
  trophy: IconUser,
  trivia: IconUser,
};

const data = [
  {
    title: "My Next Exam",
    icon: "exam",
    value: "9999",
    desc: "Better start studying",
  },
  {
    title: "My Next Assignment",
    icon: "assignment",
    value: "9999",
    desc: "How about we check another one?",
  },
  {
    title: "Study Clock Record",
    icon: "trophy",
    value: "9999",
    desc: "Your alltime record",
  },
  {
    title: "My Trivia",
    icon: "trivia",
    value: "9999",
    desc: "Total amount",
  },
] as const;

const TopStatistics = () => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

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
