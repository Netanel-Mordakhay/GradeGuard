"use client";
import { Course } from "@/app/validationSchemas";
import React from "react";
import {
  Button,
  Card,
  Group,
  RingProgress,
  Text,
  useMantineTheme,
} from "@mantine/core";
import classes from "../../styles/GradeBox.module.css";
import DefaultCard from "../global/DefaultCard";
import Link from "next/link";

interface Props {
  courses: Course[];
}

const stats = [
  { value: 31, label: "Total courses" },
  { value: 101, label: "Total credits" },
];

const GradesBox = ({ courses }: { courses: Course[] }) => {
  const gradedCourses = courses.filter((c) => typeof c.grade === "number");
  const averageGrade =
    gradedCourses.reduce((acc, c) => acc + (c.grade ?? 0), 0) /
    (gradedCourses.length || 1);

  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <DefaultCard title="My Grades" link="courses">
      <div className={classes.inner}>
        <div>
          <div>
            <Text className={classes.lead} mt="md">
              81.3
            </Text>
            <Text fz="xs" c="dimmed">
              Alltime average
            </Text>
          </div>
          <div>
            <Text className={classes.lead} mt="md">
              81.3
            </Text>
            <Text fz="xs" c="dimmed">
              Latest course grade
            </Text>
          </div>
          <Group mt="md">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={12}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((completed / total) * 100).toFixed(0)}
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  /100
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </DefaultCard>
  );
};

export default GradesBox;
