import React from "react";
import {
  IconClock,
  IconChecklist,
  IconAlignBoxBottomCenter,
  IconStar,
} from "@tabler/icons-react";
import {
  Button,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "../../styles/Login.module.css";
import FeaturesTypewriterTitle from "./FeaturesTypewriterTitle";

const features = [
  {
    icon: IconStar,
    title: "Grade Tracking",
    description:
      "Easily monitor your progress with a clear overview of your grades and course averages throughout the semester.",
  },
  {
    icon: IconChecklist,
    title: "Task Management",
    description:
      "Stay organized with a personal to-do list for each course — plan exams, assignments, and study sessions efficiently.",
  },
  {
    icon: IconClock,
    title: "Study Clock",
    description:
      "Track your study sessions with a built-in focus timer that helps you stay productive and see how much time you’re really investing.",
  },
  {
    icon: IconAlignBoxBottomCenter,
    title: "Centralized Course Overview",
    description:
      "Access all your courses, grades, assignments, and notes from a single, intuitive dashboard — no more jumping between platforms.",
  },
];

const Features = () => {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      {/* <Title ta="center">
        What's Grade<span className="blue-filled">Guard</span>?
      </Title> */}
      <FeaturesTypewriterTitle />
      <Text c="dimmed" fz="sm" ta="center">
        GradeGuard is your personal academic assistant — track grades, manage
        courses, and stay on top of your assignments, all in one place,{" "}
        <span style={{ fontWeight: 500 }}>all completely free</span>.
      </Text>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30} mt={30}>
        {items}
      </SimpleGrid>
    </div>
  );
};

export default Features;
