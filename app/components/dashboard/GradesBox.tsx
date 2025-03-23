"use client";
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
  stats: {
    totalCourses: number;
    totalCredits: number;
    averageGrade: number;
    latestGrade: number | null;
  };
}

const stats = [
  { value: 31, label: "Total courses" },
  { value: 101, label: "Total credits" },
];

const GradesBox = ({ stats }: Props) => {
  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;

  return (
    <DefaultCard title="My Grades" link="courses" linkText="View All Courses">
      <div className={classes.inner}>
        <div>
          <div>
            <Text className={classes.lead} mt="md">
              {stats.averageGrade}
            </Text>
            <Text fz="xs" c="dimmed">
              Alltime average
            </Text>
          </div>
          <div>
            <Text className={classes.lead} mt="md">
              {stats.latestGrade || "0"}
            </Text>
            <Text fz="xs" c="dimmed">
              Latest course grade
            </Text>
          </div>
          <Group mt="md">
            <div>
              <Text className={classes.label}>{stats.totalCourses}</Text>
              <Text size="xs" c="dimmed">
                Total courses
              </Text>
            </div>
            <div>
              <Text className={classes.label}>{stats.totalCredits}</Text>
              <Text size="xs" c="dimmed">
                Total credits
              </Text>
            </div>
          </Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={12}
            size={150}
            sections={[
              { value: stats.averageGrade, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {stats.averageGrade}
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
