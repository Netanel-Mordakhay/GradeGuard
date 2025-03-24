"use client";
import React from "react";
import { Group, RingProgress, Text, useMantineTheme } from "@mantine/core";
import DefaultCard from "../global/DefaultCard";

interface Props {
  stats: {
    totalCourses: number;
    totalCredits: number;
    averageGrade: number;
    latestGrade: number | null;
  };
}

const GradesBox = ({ stats }: Props) => {
  const theme = useMantineTheme();

  return (
    <DefaultCard title="My Grades" link="courses" linkText="View All Courses">
      <Group justify="space-between" wrap="nowrap">
        <div>
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {stats.averageGrade}
            </Text>
            <Text className="text-label-xs">Alltime average</Text>
          </div>
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {stats.latestGrade || "0"}
            </Text>
            <Text fz="xs" c="dimmed">
              Latest course grade
            </Text>
          </div>
          <Group mt="md">
            <div>
              <Text className="text-lead text-lead-md">
                {stats.totalCourses}
              </Text>
              <Text className="text-label-xs">Total courses</Text>
            </div>
            <div>
              <Text className="text-lead text-lead-md">
                {stats.totalCredits}
              </Text>
              <Text className="text-label-xs">Total credits</Text>
            </div>
          </Group>
        </div>

        <RingProgress
          roundCaps
          thickness={12}
          size={150}
          sections={[{ value: stats.averageGrade, color: theme.primaryColor }]}
          label={
            <div>
              <Text ta="center" className="text-lead text-lead-lg">
                {stats.averageGrade}
              </Text>
              <Text ta="center" className="text-label-xs">
                /100
              </Text>
            </div>
          }
        />
      </Group>
    </DefaultCard>
  );
};

export default GradesBox;
