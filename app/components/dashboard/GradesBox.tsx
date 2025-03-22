import { Course } from "@/app/validationSchemas";
import { User } from "next-auth";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import { List, ListItem, SemiCircleProgress, Stack } from "@mantine/core";

interface Props {
  courses: Course[];
}

const GradesBox = ({ courses }: { courses: Course[] }) => {
  const gradedCourses = courses.filter((c) => typeof c.grade === "number");
  const averageGrade =
    gradedCourses.reduce((acc, c) => acc + (c.grade ?? 0), 0) /
    (gradedCourses.length || 1);
  return (
    <DefaultCard title="My Grades">
      <Stack align="center">
        <SemiCircleProgress value={80} label="80%" labelPosition="center" />
        <List>
          <ListItem>Average grade: 80</ListItem>
          <ListItem>Total courses: 31</ListItem>
          <ListItem>Total credits: 103</ListItem>
        </List>
      </Stack>
    </DefaultCard>
  );
};

export default GradesBox;
